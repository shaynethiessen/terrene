#!/usr/bin/env bash

TOOLS_DIR='/tools'

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

exit 0