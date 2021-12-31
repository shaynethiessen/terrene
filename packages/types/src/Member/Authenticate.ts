import type {MemberEntity} from './Entity';

export type MemberAuthenticateParams = {memberId: string};
export type MemberAuthenticateReturn = MemberEntity | null;
