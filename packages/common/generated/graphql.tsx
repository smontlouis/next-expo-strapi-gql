import { Resolver as GraphCacheResolver, UpdateResolver as GraphCacheUpdateResolver, OptimisticMutationResolver as GraphCacheOptimisticMutationResolver, StorageAdapter as GraphCacheStorageAdapter } from '@urql/exchange-graphcache';
import { IntrospectionData } from '@urql/exchange-graphcache/dist/types/ast';
import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = I18NLocale | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename: 'Mutation';
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateFileInfo: UploadFileEntityResponse;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename: 'Query';
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type ProfileQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProfileQuery = { __typename: 'Query', usersPermissionsUser?: { __typename: 'UsersPermissionsUserEntityResponse', data?: { __typename: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename: 'UsersPermissionsUser', username: string, email: string, confirmed?: boolean | null } | null } | null } | null };


export const ProfileDocument = gql`
    query profile($id: ID!) {
  usersPermissionsUser(id: $id) {
    data {
      id
      attributes {
        username
        email
        confirmed
      }
    }
  }
}
    `;

export function useProfileQuery(options: Omit<Urql.UseQueryArgs<ProfileQueryVariables>, 'query'>) {
  return Urql.useQuery<ProfileQuery>({ query: ProfileDocument, ...options });
};
export type WithTypename<T extends { __typename?: any }> = T & { __typename: NonNullable<T['__typename']> };

export type GraphCacheKeysConfig = {
  I18NLocale?: (data: WithTypename<I18NLocale>) => null | string,
  I18NLocaleEntity?: (data: WithTypename<I18NLocaleEntity>) => null | string,
  I18NLocaleEntityResponse?: (data: WithTypename<I18NLocaleEntityResponse>) => null | string,
  I18NLocaleEntityResponseCollection?: (data: WithTypename<I18NLocaleEntityResponseCollection>) => null | string,
  Pagination?: (data: WithTypename<Pagination>) => null | string,
  ResponseCollectionMeta?: (data: WithTypename<ResponseCollectionMeta>) => null | string,
  UploadFile?: (data: WithTypename<UploadFile>) => null | string,
  UploadFileEntity?: (data: WithTypename<UploadFileEntity>) => null | string,
  UploadFileEntityResponse?: (data: WithTypename<UploadFileEntityResponse>) => null | string,
  UploadFileEntityResponseCollection?: (data: WithTypename<UploadFileEntityResponseCollection>) => null | string,
  UsersPermissionsCreateRolePayload?: (data: WithTypename<UsersPermissionsCreateRolePayload>) => null | string,
  UsersPermissionsDeleteRolePayload?: (data: WithTypename<UsersPermissionsDeleteRolePayload>) => null | string,
  UsersPermissionsLoginPayload?: (data: WithTypename<UsersPermissionsLoginPayload>) => null | string,
  UsersPermissionsMe?: (data: WithTypename<UsersPermissionsMe>) => null | string,
  UsersPermissionsMeRole?: (data: WithTypename<UsersPermissionsMeRole>) => null | string,
  UsersPermissionsPasswordPayload?: (data: WithTypename<UsersPermissionsPasswordPayload>) => null | string,
  UsersPermissionsPermission?: (data: WithTypename<UsersPermissionsPermission>) => null | string,
  UsersPermissionsPermissionEntity?: (data: WithTypename<UsersPermissionsPermissionEntity>) => null | string,
  UsersPermissionsPermissionRelationResponseCollection?: (data: WithTypename<UsersPermissionsPermissionRelationResponseCollection>) => null | string,
  UsersPermissionsRole?: (data: WithTypename<UsersPermissionsRole>) => null | string,
  UsersPermissionsRoleEntity?: (data: WithTypename<UsersPermissionsRoleEntity>) => null | string,
  UsersPermissionsRoleEntityResponse?: (data: WithTypename<UsersPermissionsRoleEntityResponse>) => null | string,
  UsersPermissionsRoleEntityResponseCollection?: (data: WithTypename<UsersPermissionsRoleEntityResponseCollection>) => null | string,
  UsersPermissionsUpdateRolePayload?: (data: WithTypename<UsersPermissionsUpdateRolePayload>) => null | string,
  UsersPermissionsUser?: (data: WithTypename<UsersPermissionsUser>) => null | string,
  UsersPermissionsUserEntity?: (data: WithTypename<UsersPermissionsUserEntity>) => null | string,
  UsersPermissionsUserEntityResponse?: (data: WithTypename<UsersPermissionsUserEntityResponse>) => null | string,
  UsersPermissionsUserEntityResponseCollection?: (data: WithTypename<UsersPermissionsUserEntityResponseCollection>) => null | string,
  UsersPermissionsUserRelationResponseCollection?: (data: WithTypename<UsersPermissionsUserRelationResponseCollection>) => null | string
}

export type GraphCacheResolvers = {
  Query?: {
    uploadFile?: GraphCacheResolver<WithTypename<Query>, QueryUploadFileArgs, WithTypename<UploadFileEntityResponse> | string>,
    uploadFiles?: GraphCacheResolver<WithTypename<Query>, QueryUploadFilesArgs, WithTypename<UploadFileEntityResponseCollection> | string>,
    i18NLocale?: GraphCacheResolver<WithTypename<Query>, QueryI18NLocaleArgs, WithTypename<I18NLocaleEntityResponse> | string>,
    i18NLocales?: GraphCacheResolver<WithTypename<Query>, QueryI18NLocalesArgs, WithTypename<I18NLocaleEntityResponseCollection> | string>,
    usersPermissionsRole?: GraphCacheResolver<WithTypename<Query>, QueryUsersPermissionsRoleArgs, WithTypename<UsersPermissionsRoleEntityResponse> | string>,
    usersPermissionsRoles?: GraphCacheResolver<WithTypename<Query>, QueryUsersPermissionsRolesArgs, WithTypename<UsersPermissionsRoleEntityResponseCollection> | string>,
    usersPermissionsUser?: GraphCacheResolver<WithTypename<Query>, QueryUsersPermissionsUserArgs, WithTypename<UsersPermissionsUserEntityResponse> | string>,
    usersPermissionsUsers?: GraphCacheResolver<WithTypename<Query>, QueryUsersPermissionsUsersArgs, WithTypename<UsersPermissionsUserEntityResponseCollection> | string>,
    me?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, WithTypename<UsersPermissionsMe> | string>
  },
  I18NLocale?: {
    name?: GraphCacheResolver<WithTypename<I18NLocale>, Record<string, never>, Scalars['String'] | string>,
    code?: GraphCacheResolver<WithTypename<I18NLocale>, Record<string, never>, Scalars['String'] | string>,
    createdAt?: GraphCacheResolver<WithTypename<I18NLocale>, Record<string, never>, Scalars['DateTime'] | string>,
    updatedAt?: GraphCacheResolver<WithTypename<I18NLocale>, Record<string, never>, Scalars['DateTime'] | string>
  },
  I18NLocaleEntity?: {
    id?: GraphCacheResolver<WithTypename<I18NLocaleEntity>, Record<string, never>, Scalars['ID'] | string>,
    attributes?: GraphCacheResolver<WithTypename<I18NLocaleEntity>, Record<string, never>, WithTypename<I18NLocale> | string>
  },
  I18NLocaleEntityResponse?: {
    data?: GraphCacheResolver<WithTypename<I18NLocaleEntityResponse>, Record<string, never>, WithTypename<I18NLocaleEntity> | string>
  },
  I18NLocaleEntityResponseCollection?: {
    data?: GraphCacheResolver<WithTypename<I18NLocaleEntityResponseCollection>, Record<string, never>, Array<WithTypename<I18NLocaleEntity> | string>>,
    meta?: GraphCacheResolver<WithTypename<I18NLocaleEntityResponseCollection>, Record<string, never>, WithTypename<ResponseCollectionMeta> | string>
  },
  Pagination?: {
    total?: GraphCacheResolver<WithTypename<Pagination>, Record<string, never>, Scalars['Int'] | string>,
    page?: GraphCacheResolver<WithTypename<Pagination>, Record<string, never>, Scalars['Int'] | string>,
    pageSize?: GraphCacheResolver<WithTypename<Pagination>, Record<string, never>, Scalars['Int'] | string>,
    pageCount?: GraphCacheResolver<WithTypename<Pagination>, Record<string, never>, Scalars['Int'] | string>
  },
  ResponseCollectionMeta?: {
    pagination?: GraphCacheResolver<WithTypename<ResponseCollectionMeta>, Record<string, never>, WithTypename<Pagination> | string>
  },
  UploadFile?: {
    name?: GraphCacheResolver<WithTypename<UploadFile>, Record<string, never>, Scalars['String'] | string>,
    alternativeText?: GraphCacheResolver<WithTypename<UploadFile>, Record<string, never>, Scalars['String'] | string>,
    caption?: GraphCacheResolver<WithTypename<UploadFile>, Record<string, never>, Scalars['String'] | string>,
    width?: GraphCacheResolver<WithTypename<UploadFile>, Record<string, never>, Scalars['Int'] | string>,
    height?: GraphCacheResolver<WithTypename<UploadFile>, Record<string, never>, Scalars['Int'] | string>,
    formats?: GraphCacheResolver<WithTypename<UploadFile>, Record<string, never>, Scalars['JSON'] | string>,
    hash?: GraphCacheResolver<WithTypename<UploadFile>, Record<string, never>, Scalars['String'] | string>,
    ext?: GraphCacheResolver<WithTypename<UploadFile>, Record<string, never>, Scalars['String'] | string>,
    mime?: GraphCacheResolver<WithTypename<UploadFile>, Record<string, never>, Scalars['String'] | string>,
    size?: GraphCacheResolver<WithTypename<UploadFile>, Record<string, never>, Scalars['Float'] | string>,
    url?: GraphCacheResolver<WithTypename<UploadFile>, Record<string, never>, Scalars['String'] | string>,
    previewUrl?: GraphCacheResolver<WithTypename<UploadFile>, Record<string, never>, Scalars['String'] | string>,
    provider?: GraphCacheResolver<WithTypename<UploadFile>, Record<string, never>, Scalars['String'] | string>,
    provider_metadata?: GraphCacheResolver<WithTypename<UploadFile>, Record<string, never>, Scalars['JSON'] | string>,
    related?: GraphCacheResolver<WithTypename<UploadFile>, Record<string, never>, Array<WithTypename<GenericMorph> | string>>,
    createdAt?: GraphCacheResolver<WithTypename<UploadFile>, Record<string, never>, Scalars['DateTime'] | string>,
    updatedAt?: GraphCacheResolver<WithTypename<UploadFile>, Record<string, never>, Scalars['DateTime'] | string>
  },
  UploadFileEntity?: {
    id?: GraphCacheResolver<WithTypename<UploadFileEntity>, Record<string, never>, Scalars['ID'] | string>,
    attributes?: GraphCacheResolver<WithTypename<UploadFileEntity>, Record<string, never>, WithTypename<UploadFile> | string>
  },
  UploadFileEntityResponse?: {
    data?: GraphCacheResolver<WithTypename<UploadFileEntityResponse>, Record<string, never>, WithTypename<UploadFileEntity> | string>
  },
  UploadFileEntityResponseCollection?: {
    data?: GraphCacheResolver<WithTypename<UploadFileEntityResponseCollection>, Record<string, never>, Array<WithTypename<UploadFileEntity> | string>>,
    meta?: GraphCacheResolver<WithTypename<UploadFileEntityResponseCollection>, Record<string, never>, WithTypename<ResponseCollectionMeta> | string>
  },
  UsersPermissionsCreateRolePayload?: {
    ok?: GraphCacheResolver<WithTypename<UsersPermissionsCreateRolePayload>, Record<string, never>, Scalars['Boolean'] | string>
  },
  UsersPermissionsDeleteRolePayload?: {
    ok?: GraphCacheResolver<WithTypename<UsersPermissionsDeleteRolePayload>, Record<string, never>, Scalars['Boolean'] | string>
  },
  UsersPermissionsLoginPayload?: {
    jwt?: GraphCacheResolver<WithTypename<UsersPermissionsLoginPayload>, Record<string, never>, Scalars['String'] | string>,
    user?: GraphCacheResolver<WithTypename<UsersPermissionsLoginPayload>, Record<string, never>, WithTypename<UsersPermissionsMe> | string>
  },
  UsersPermissionsMe?: {
    id?: GraphCacheResolver<WithTypename<UsersPermissionsMe>, Record<string, never>, Scalars['ID'] | string>,
    username?: GraphCacheResolver<WithTypename<UsersPermissionsMe>, Record<string, never>, Scalars['String'] | string>,
    email?: GraphCacheResolver<WithTypename<UsersPermissionsMe>, Record<string, never>, Scalars['String'] | string>,
    confirmed?: GraphCacheResolver<WithTypename<UsersPermissionsMe>, Record<string, never>, Scalars['Boolean'] | string>,
    blocked?: GraphCacheResolver<WithTypename<UsersPermissionsMe>, Record<string, never>, Scalars['Boolean'] | string>,
    role?: GraphCacheResolver<WithTypename<UsersPermissionsMe>, Record<string, never>, WithTypename<UsersPermissionsMeRole> | string>
  },
  UsersPermissionsMeRole?: {
    id?: GraphCacheResolver<WithTypename<UsersPermissionsMeRole>, Record<string, never>, Scalars['ID'] | string>,
    name?: GraphCacheResolver<WithTypename<UsersPermissionsMeRole>, Record<string, never>, Scalars['String'] | string>,
    description?: GraphCacheResolver<WithTypename<UsersPermissionsMeRole>, Record<string, never>, Scalars['String'] | string>,
    type?: GraphCacheResolver<WithTypename<UsersPermissionsMeRole>, Record<string, never>, Scalars['String'] | string>
  },
  UsersPermissionsPasswordPayload?: {
    ok?: GraphCacheResolver<WithTypename<UsersPermissionsPasswordPayload>, Record<string, never>, Scalars['Boolean'] | string>
  },
  UsersPermissionsPermission?: {
    action?: GraphCacheResolver<WithTypename<UsersPermissionsPermission>, Record<string, never>, Scalars['String'] | string>,
    role?: GraphCacheResolver<WithTypename<UsersPermissionsPermission>, Record<string, never>, WithTypename<UsersPermissionsRoleEntityResponse> | string>,
    createdAt?: GraphCacheResolver<WithTypename<UsersPermissionsPermission>, Record<string, never>, Scalars['DateTime'] | string>,
    updatedAt?: GraphCacheResolver<WithTypename<UsersPermissionsPermission>, Record<string, never>, Scalars['DateTime'] | string>
  },
  UsersPermissionsPermissionEntity?: {
    id?: GraphCacheResolver<WithTypename<UsersPermissionsPermissionEntity>, Record<string, never>, Scalars['ID'] | string>,
    attributes?: GraphCacheResolver<WithTypename<UsersPermissionsPermissionEntity>, Record<string, never>, WithTypename<UsersPermissionsPermission> | string>
  },
  UsersPermissionsPermissionRelationResponseCollection?: {
    data?: GraphCacheResolver<WithTypename<UsersPermissionsPermissionRelationResponseCollection>, Record<string, never>, Array<WithTypename<UsersPermissionsPermissionEntity> | string>>
  },
  UsersPermissionsRole?: {
    name?: GraphCacheResolver<WithTypename<UsersPermissionsRole>, Record<string, never>, Scalars['String'] | string>,
    description?: GraphCacheResolver<WithTypename<UsersPermissionsRole>, Record<string, never>, Scalars['String'] | string>,
    type?: GraphCacheResolver<WithTypename<UsersPermissionsRole>, Record<string, never>, Scalars['String'] | string>,
    permissions?: GraphCacheResolver<WithTypename<UsersPermissionsRole>, UsersPermissionsRolePermissionsArgs, WithTypename<UsersPermissionsPermissionRelationResponseCollection> | string>,
    users?: GraphCacheResolver<WithTypename<UsersPermissionsRole>, UsersPermissionsRoleUsersArgs, WithTypename<UsersPermissionsUserRelationResponseCollection> | string>,
    createdAt?: GraphCacheResolver<WithTypename<UsersPermissionsRole>, Record<string, never>, Scalars['DateTime'] | string>,
    updatedAt?: GraphCacheResolver<WithTypename<UsersPermissionsRole>, Record<string, never>, Scalars['DateTime'] | string>
  },
  UsersPermissionsRoleEntity?: {
    id?: GraphCacheResolver<WithTypename<UsersPermissionsRoleEntity>, Record<string, never>, Scalars['ID'] | string>,
    attributes?: GraphCacheResolver<WithTypename<UsersPermissionsRoleEntity>, Record<string, never>, WithTypename<UsersPermissionsRole> | string>
  },
  UsersPermissionsRoleEntityResponse?: {
    data?: GraphCacheResolver<WithTypename<UsersPermissionsRoleEntityResponse>, Record<string, never>, WithTypename<UsersPermissionsRoleEntity> | string>
  },
  UsersPermissionsRoleEntityResponseCollection?: {
    data?: GraphCacheResolver<WithTypename<UsersPermissionsRoleEntityResponseCollection>, Record<string, never>, Array<WithTypename<UsersPermissionsRoleEntity> | string>>,
    meta?: GraphCacheResolver<WithTypename<UsersPermissionsRoleEntityResponseCollection>, Record<string, never>, WithTypename<ResponseCollectionMeta> | string>
  },
  UsersPermissionsUpdateRolePayload?: {
    ok?: GraphCacheResolver<WithTypename<UsersPermissionsUpdateRolePayload>, Record<string, never>, Scalars['Boolean'] | string>
  },
  UsersPermissionsUser?: {
    username?: GraphCacheResolver<WithTypename<UsersPermissionsUser>, Record<string, never>, Scalars['String'] | string>,
    email?: GraphCacheResolver<WithTypename<UsersPermissionsUser>, Record<string, never>, Scalars['String'] | string>,
    provider?: GraphCacheResolver<WithTypename<UsersPermissionsUser>, Record<string, never>, Scalars['String'] | string>,
    confirmed?: GraphCacheResolver<WithTypename<UsersPermissionsUser>, Record<string, never>, Scalars['Boolean'] | string>,
    blocked?: GraphCacheResolver<WithTypename<UsersPermissionsUser>, Record<string, never>, Scalars['Boolean'] | string>,
    role?: GraphCacheResolver<WithTypename<UsersPermissionsUser>, Record<string, never>, WithTypename<UsersPermissionsRoleEntityResponse> | string>,
    createdAt?: GraphCacheResolver<WithTypename<UsersPermissionsUser>, Record<string, never>, Scalars['DateTime'] | string>,
    updatedAt?: GraphCacheResolver<WithTypename<UsersPermissionsUser>, Record<string, never>, Scalars['DateTime'] | string>
  },
  UsersPermissionsUserEntity?: {
    id?: GraphCacheResolver<WithTypename<UsersPermissionsUserEntity>, Record<string, never>, Scalars['ID'] | string>,
    attributes?: GraphCacheResolver<WithTypename<UsersPermissionsUserEntity>, Record<string, never>, WithTypename<UsersPermissionsUser> | string>
  },
  UsersPermissionsUserEntityResponse?: {
    data?: GraphCacheResolver<WithTypename<UsersPermissionsUserEntityResponse>, Record<string, never>, WithTypename<UsersPermissionsUserEntity> | string>
  },
  UsersPermissionsUserEntityResponseCollection?: {
    data?: GraphCacheResolver<WithTypename<UsersPermissionsUserEntityResponseCollection>, Record<string, never>, Array<WithTypename<UsersPermissionsUserEntity> | string>>,
    meta?: GraphCacheResolver<WithTypename<UsersPermissionsUserEntityResponseCollection>, Record<string, never>, WithTypename<ResponseCollectionMeta> | string>
  },
  UsersPermissionsUserRelationResponseCollection?: {
    data?: GraphCacheResolver<WithTypename<UsersPermissionsUserRelationResponseCollection>, Record<string, never>, Array<WithTypename<UsersPermissionsUserEntity> | string>>
  }
};

export type GraphCacheOptimisticUpdaters = {
  createUploadFile?: GraphCacheOptimisticMutationResolver<MutationCreateUploadFileArgs, Maybe<WithTypename<UploadFileEntityResponse>>>,
  updateUploadFile?: GraphCacheOptimisticMutationResolver<MutationUpdateUploadFileArgs, Maybe<WithTypename<UploadFileEntityResponse>>>,
  deleteUploadFile?: GraphCacheOptimisticMutationResolver<MutationDeleteUploadFileArgs, Maybe<WithTypename<UploadFileEntityResponse>>>,
  upload?: GraphCacheOptimisticMutationResolver<MutationUploadArgs, WithTypename<UploadFileEntityResponse>>,
  multipleUpload?: GraphCacheOptimisticMutationResolver<MutationMultipleUploadArgs, Array<WithTypename<UploadFileEntityResponse>>>,
  updateFileInfo?: GraphCacheOptimisticMutationResolver<MutationUpdateFileInfoArgs, WithTypename<UploadFileEntityResponse>>,
  removeFile?: GraphCacheOptimisticMutationResolver<MutationRemoveFileArgs, Maybe<WithTypename<UploadFileEntityResponse>>>,
  createUsersPermissionsRole?: GraphCacheOptimisticMutationResolver<MutationCreateUsersPermissionsRoleArgs, Maybe<WithTypename<UsersPermissionsCreateRolePayload>>>,
  updateUsersPermissionsRole?: GraphCacheOptimisticMutationResolver<MutationUpdateUsersPermissionsRoleArgs, Maybe<WithTypename<UsersPermissionsUpdateRolePayload>>>,
  deleteUsersPermissionsRole?: GraphCacheOptimisticMutationResolver<MutationDeleteUsersPermissionsRoleArgs, Maybe<WithTypename<UsersPermissionsDeleteRolePayload>>>,
  createUsersPermissionsUser?: GraphCacheOptimisticMutationResolver<MutationCreateUsersPermissionsUserArgs, WithTypename<UsersPermissionsUserEntityResponse>>,
  updateUsersPermissionsUser?: GraphCacheOptimisticMutationResolver<MutationUpdateUsersPermissionsUserArgs, WithTypename<UsersPermissionsUserEntityResponse>>,
  deleteUsersPermissionsUser?: GraphCacheOptimisticMutationResolver<MutationDeleteUsersPermissionsUserArgs, WithTypename<UsersPermissionsUserEntityResponse>>,
  login?: GraphCacheOptimisticMutationResolver<MutationLoginArgs, WithTypename<UsersPermissionsLoginPayload>>,
  register?: GraphCacheOptimisticMutationResolver<MutationRegisterArgs, WithTypename<UsersPermissionsLoginPayload>>,
  forgotPassword?: GraphCacheOptimisticMutationResolver<MutationForgotPasswordArgs, Maybe<WithTypename<UsersPermissionsPasswordPayload>>>,
  resetPassword?: GraphCacheOptimisticMutationResolver<MutationResetPasswordArgs, Maybe<WithTypename<UsersPermissionsLoginPayload>>>,
  emailConfirmation?: GraphCacheOptimisticMutationResolver<MutationEmailConfirmationArgs, Maybe<WithTypename<UsersPermissionsLoginPayload>>>
};

export type GraphCacheUpdaters = {
  Mutation?: {
    createUploadFile?: GraphCacheUpdateResolver<{ createUploadFile: Maybe<WithTypename<UploadFileEntityResponse>> }, MutationCreateUploadFileArgs>,
    updateUploadFile?: GraphCacheUpdateResolver<{ updateUploadFile: Maybe<WithTypename<UploadFileEntityResponse>> }, MutationUpdateUploadFileArgs>,
    deleteUploadFile?: GraphCacheUpdateResolver<{ deleteUploadFile: Maybe<WithTypename<UploadFileEntityResponse>> }, MutationDeleteUploadFileArgs>,
    upload?: GraphCacheUpdateResolver<{ upload: WithTypename<UploadFileEntityResponse> }, MutationUploadArgs>,
    multipleUpload?: GraphCacheUpdateResolver<{ multipleUpload: Array<WithTypename<UploadFileEntityResponse>> }, MutationMultipleUploadArgs>,
    updateFileInfo?: GraphCacheUpdateResolver<{ updateFileInfo: WithTypename<UploadFileEntityResponse> }, MutationUpdateFileInfoArgs>,
    removeFile?: GraphCacheUpdateResolver<{ removeFile: Maybe<WithTypename<UploadFileEntityResponse>> }, MutationRemoveFileArgs>,
    createUsersPermissionsRole?: GraphCacheUpdateResolver<{ createUsersPermissionsRole: Maybe<WithTypename<UsersPermissionsCreateRolePayload>> }, MutationCreateUsersPermissionsRoleArgs>,
    updateUsersPermissionsRole?: GraphCacheUpdateResolver<{ updateUsersPermissionsRole: Maybe<WithTypename<UsersPermissionsUpdateRolePayload>> }, MutationUpdateUsersPermissionsRoleArgs>,
    deleteUsersPermissionsRole?: GraphCacheUpdateResolver<{ deleteUsersPermissionsRole: Maybe<WithTypename<UsersPermissionsDeleteRolePayload>> }, MutationDeleteUsersPermissionsRoleArgs>,
    createUsersPermissionsUser?: GraphCacheUpdateResolver<{ createUsersPermissionsUser: WithTypename<UsersPermissionsUserEntityResponse> }, MutationCreateUsersPermissionsUserArgs>,
    updateUsersPermissionsUser?: GraphCacheUpdateResolver<{ updateUsersPermissionsUser: WithTypename<UsersPermissionsUserEntityResponse> }, MutationUpdateUsersPermissionsUserArgs>,
    deleteUsersPermissionsUser?: GraphCacheUpdateResolver<{ deleteUsersPermissionsUser: WithTypename<UsersPermissionsUserEntityResponse> }, MutationDeleteUsersPermissionsUserArgs>,
    login?: GraphCacheUpdateResolver<{ login: WithTypename<UsersPermissionsLoginPayload> }, MutationLoginArgs>,
    register?: GraphCacheUpdateResolver<{ register: WithTypename<UsersPermissionsLoginPayload> }, MutationRegisterArgs>,
    forgotPassword?: GraphCacheUpdateResolver<{ forgotPassword: Maybe<WithTypename<UsersPermissionsPasswordPayload>> }, MutationForgotPasswordArgs>,
    resetPassword?: GraphCacheUpdateResolver<{ resetPassword: Maybe<WithTypename<UsersPermissionsLoginPayload>> }, MutationResetPasswordArgs>,
    emailConfirmation?: GraphCacheUpdateResolver<{ emailConfirmation: Maybe<WithTypename<UsersPermissionsLoginPayload>> }, MutationEmailConfirmationArgs>
  },
  Subscription?: {},
};

export type GraphCacheConfig = {
  schema?: IntrospectionData,
  updates?: GraphCacheUpdaters,
  keys?: GraphCacheKeysConfig,
  optimistic?: GraphCacheOptimisticUpdaters,
  resolvers?: GraphCacheResolvers,
  storage?: GraphCacheStorageAdapter
};