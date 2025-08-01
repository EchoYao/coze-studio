/*
 * Copyright 2025 coze-dev Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

import * as modeleval from './modeleval';

export type Int64 = string | number;

export interface CreateOfflineEvalTaskRequest {
  task?: modeleval.OfflineEvalTask;
  userJwtToken?: string;
  /** 此托管的方舟账号的id */
  accountID?: string;
  /** 空间ID */
  space_id?: string;
}

export interface CreateOfflineEvalTaskResponse {
  id?: string;
}

export interface GetOfflineEvalTaskRequest {
  task_id?: string;
  userJwtToken?: string;
  /** 空间ID */
  space_id?: string;
}

export interface GetOfflineEvalTaskResponse {
  task?: modeleval.OfflineEvalTask;
}

export interface ListOfflineEvalTaskRequest {
  nameKeyword?: string;
  id?: string;
  creatorID?: string;
  userJwtToken?: string;
  pageSize?: Int64;
  pageNum?: Int64;
  /** 空间ID */
  space_id?: string;
}

export interface ListOfflineEvalTaskResponse {
  task?: Array<modeleval.OfflineEvalTask>;
  hasMore?: boolean;
  total?: Int64;
}

export interface ModelSupportedMethodsRequest {
  model?: modeleval.OfflineEvalTaskModel;
  /** 如果是方舟，还需要传accountID */
  accountID?: string;
  /** 空间ID */
  space_id?: string;
}

export interface ModelSupportedMethodsResponse {
  supportOfflineEval?: boolean;
}

export interface ParseMerlinSeedModelConfigRequest {
  checkpointHdfsPath?: string;
  modelSid?: string;
  trainingJobRunID?: string;
  userJwtToken?: string;
  /** 空间ID */
  space_id?: string;
}

export interface ParseMerlinSeedModelConfigResponse {
  checkPointHdfsPath?: string;
  networkParamConfigContext?: string;
  paramConfigType?: string;
  quantParamConfigContext?: string;
  tokenizerHdfsPath?: string;
  xperfParamConfigContext?: string;
}

export interface TerminateOfflineEvalTaskRequest {
  taskID?: string;
  userJwtToken?: string;
  /** 空间ID */
  space_id?: string;
}

export interface TerminateOfflineEvalTaskResponse {}
/* eslint-enable */
