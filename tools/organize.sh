#!/usr/bin/env bash

PACKAGE_DIR="./packages"


# Gets package paths into an array
#   PKGDIRS=()
#   get_package_folders_arr "$PACKAGE_DIR" IGNORE_PKGS PKGDIRS
# $1 - Packages directory
# $2 - Array of packages to ignore
# $3 - Reference to array to add package paths too
get_package_folders_arr () {
  local pkgdir
  local -n ignores=$2
  local -n outarr=$3
  pkgdir="$1"
  outarr=()
  mapfile -t M < <( ls -1 "$pkgdir" )
  for i in "${M[@]}"
  do
    if [[ ! " ${ignores[@]} " =~ " ${i} " ]]; then
      outarr+=( "$(realpath "$pkgdir/$i")" )
    fi
  done
}

# Gets package folders into a newline-separated string
#   PKGSTR=$(get_package_folders_string "$PACKAGE_DIR" IGNORE_PKGS '/src')
# $1 - Packages directory
# $2 - Array of packages to ignore
# $3 - Extra string to append to each package folder
get_package_folders_string () {
  local extra
  local dirs=""
  extra=${3:-""}
  arr=()
  get_package_folders_arr "$1" $2 arr
  for i in "${arr[@]}"
  do
    dirs+="$i$extra"$'\n'
  done
  echo "$dirs"
}

TOOLS_DIR='./tools'
SRCDIRS=$(get_package_folders_string "$PACKAGE_DIR" IGNORE_PKGS '/src')

echo "${SRCDIRS}" | DEBUG_NAMESPACE="$DEBUG_NAMESPACE" "node_modules/jscodeshift/bin/jscodeshift.js" --extensions=tsx,ts --parser=tsx -t "$TOOLS_DIR/cmOrganize.ts" --stdin
ret=$?
if [ $ret -ne 0 ]; then
  error "Error running codemod. Lint fixing will continue to prevent many changed files."
fi

yarn -s lint:fix

if [ $ret -ne 0 ]; then
  error "Errors occurred during generation. Some files may be left in an inconsistent state."
  exit $ret
fi
$SHELL
exit 0