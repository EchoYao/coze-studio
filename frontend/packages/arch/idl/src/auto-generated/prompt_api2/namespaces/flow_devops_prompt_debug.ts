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

import * as flow_devops_prompt_common from './flow_devops_prompt_common';
import * as base from './base';
import * as mcp from './mcp';

export type Int64 = string | number;

export interface ChatTestRequest {
  prompt: flow_devops_prompt_common.Prompt;
  message?: flow_devops_prompt_common.Message;
  contexts?: Array<flow_devops_prompt_common.Message>;
  variables?: Array<flow_devops_prompt_common.Variable>;
  /** 空间ID */
  space_id: Int64;
  base?: base.Base;
}

export interface ChatTestResponse {
  item?: flow_devops_prompt_common.ReplyItem;
  code?: number;
  msg?: string;
  base_resp?: base.BaseResp;
}

export interface ExecuteBatchRequest {
  /** PromptID */
  prompt_id?: Int64;
  /** 空间ID */
  space_id?: Int64;
  /** CaseID */
  case_id?: Int64;
  /** DatasetID */
  dataset_id?: Int64;
  /** RowGroupIDs */
  row_group_ids?: Array<Int64>;
  /** MCP 动态配置 */
  mcp_execute_config?: mcp.MCPExecuteConfig;
  base?: base.Base;
}

export interface ExecuteBatchResponse {
  task_id?: Int64;
  code?: number;
  msg?: string;
  base_resp?: base.BaseResp;
}

export interface GetDebugDetailRequest {
  debug_id?: Int64;
  /** PromptID */
  prompt_id?: Int64;
  /** 空间ID */
  space_id?: Int64;
  base?: base.Base;
}

export interface GetDebugDetailResponse {
  debug_detail?: flow_devops_prompt_common.DebugDetail;
  code?: number;
  msg?: string;
  base_resp?: base.BaseResp;
}

export interface GetMockContextRequest {
  /** Prompt Key */
  prompt_id: Int64;
  space_id: Int64;
  base?: base.Base;
}

export interface GetMockContextResponse {
  /** deprecated，使用ContextsV2 */
  contexts?: Array<flow_devops_prompt_common.Message>;
  /** 参数列表 */
  variables?: Array<Array<flow_devops_prompt_common.Variable>>;
  /** 用户调试配置 */
  user_debug_config?: flow_devops_prompt_common.UserDebugConfig;
  /** 竞技场配置 */
  compare_config?: flow_devops_prompt_common.CompareConfig;
  /** 对话历史 */
  contexts_v2?: Array<flow_devops_prompt_common.DebugMessage>;
  code?: number;
  msg?: string;
  base_resp?: base.BaseResp;
}

export interface ListDebugHistoryRequest {
  /** PromptID */
  prompt_id?: Int64;
  /** 空间ID */
  space_id?: Int64;
  /** 默认只展示登录用户的调试记录，如果传递 listAll则返回所有记录 */
  list_all?: boolean;
  /** 起始为空，滚动传入Response里的NextCursor */
  cursor?: Int64;
  /** 天数，不传默认7天 */
  offset?: Int64;
  base?: base.Base;
}

export interface ListDebugHistoryResponse {
  /** Prompt列表 */
  debug_history?: Array<flow_devops_prompt_common.DebugBrief>;
  next_cursor?: Int64;
  has_more?: boolean;
  code?: number;
  msg?: string;
  base_resp?: base.BaseResp;
}

export interface LoadBatchDebugInfoRequest {
  /** PromptID */
  prompt_id?: Int64;
  /** 空间ID */
  space_id?: Int64;
  base?: base.Base;
}

export interface LoadBatchDebugInfoResponse {
  case_id?: Int64;
  code?: number;
  msg?: string;
  base_resp?: base.BaseResp;
}

export interface SaveMockContextRequest {
  /** PromptID */
  prompt_id: Int64;
  /** deprecated，使用ContextsV2 */
  contexts?: Array<flow_devops_prompt_common.Message>;
  /** 空间ID */
  space_id: Int64;
  /** 多组变量 */
  variables?: Array<Array<flow_devops_prompt_common.Variable>>;
  /** 用户调试配置 */
  user_debug_config?: flow_devops_prompt_common.UserDebugConfig;
  /** 竞技场配置 */
  compare_config?: flow_devops_prompt_common.CompareConfig;
  /** 对话历史 */
  contexts_v2?: Array<flow_devops_prompt_common.DebugMessage>;
  base?: base.Base;
}

export interface SaveMockContextResponse {
  code?: number;
  msg?: string;
  base_resp?: base.BaseResp;
}

export interface SendMessageRequest {
  prompt: flow_devops_prompt_common.Prompt;
  message?: flow_devops_prompt_common.Message;
  contexts?: Array<flow_devops_prompt_common.Message>;
  variables?: Array<flow_devops_prompt_common.Variable>;
  /** 空间ID */
  space_id: Int64;
  /** 是否单步调试 */
  single_step_debug?: boolean;
  /** 串联调试记录(function call单步调试) */
  debug_trace_key?: string;
  /** MCP 动态配置 */
  mcp_execute_config?: mcp.MCPExecuteConfig;
  base?: base.Base;
}

export interface SendMessageResponse {
  item?: flow_devops_prompt_common.ReplyItem;
  debug_id?: string;
  code?: number;
  msg?: string;
  base_resp?: base.BaseResp;
}

export interface StreamingSendMessageRequest {
  prompt: flow_devops_prompt_common.Prompt;
  message?: flow_devops_prompt_common.Message;
  contexts?: Array<flow_devops_prompt_common.Message>;
  variables?: Array<flow_devops_prompt_common.Variable>;
  /** 空间ID */
  space_id: Int64;
  /** 是否单步调试 */
  single_step_debug?: boolean;
  /** 串联调试记录(function call单步调试) */
  debug_trace_key?: string;
  /** MCP 动态配置 */
  mcp_execute_config?: mcp.MCPExecuteConfig;
  base?: base.Base;
}

export interface StreamingSendMessageResponse {
  item?: flow_devops_prompt_common.ReplyItem;
  debug_id?: string;
  code?: number;
  msg?: string;
  base_resp?: base.BaseResp;
}

export interface StreamingSendMessageWithoutPermissionCheckRequest {
  prompt: flow_devops_prompt_common.Prompt;
  message?: flow_devops_prompt_common.Message;
  contexts?: Array<flow_devops_prompt_common.Message>;
  variables?: Array<flow_devops_prompt_common.Variable>;
  /** 空间ID */
  space_id: Int64;
  /** 是否单步调试 */
  single_step_debug?: boolean;
  /** 串联调试记录(function call单步调试) */
  debug_trace_key?: string;
  /** MCP 动态配置 */
  mcp_execute_config?: mcp.MCPExecuteConfig;
  base?: base.Base;
}

export interface StreamingSendMessageWithoutPermissionCheckResponse {
  item?: flow_devops_prompt_common.ReplyItem;
  code?: number;
  msg?: string;
  base_resp?: base.BaseResp;
}
/* eslint-enable */
