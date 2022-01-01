import type {MemberEntity} from './Entity';

export type MemberLoginParams = {email: string; password: string};
export type MemberLoginReturn = MemberEntity;
