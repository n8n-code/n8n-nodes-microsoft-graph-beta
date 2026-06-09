import type { INodeProperties } from 'n8n-workflow';

export const approvalWorkflowProvidersBusinessFlowDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					]
				}
			},
			"options": [
				{
					"name": "Approval Workflow Providers List Business Flows",
					"value": "Approval Workflow Providers List Business Flows",
					"action": "Get businessFlows from approvalWorkflowProviders",
					"description": "Get businessFlows from approvalWorkflowProviders",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/approvalWorkflowProviders/{{$parameter[\"approvalWorkflowProvider-id\"]}}/businessFlows"
						}
					}
				},
				{
					"name": "Approval Workflow Providers Create Business Flows",
					"value": "Approval Workflow Providers Create Business Flows",
					"action": "Create new navigation property to businessFlows for approvalWorkflowProviders",
					"description": "Create new navigation property to businessFlows for approvalWorkflowProviders",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/approvalWorkflowProviders/{{$parameter[\"approvalWorkflowProvider-id\"]}}/businessFlows"
						}
					}
				},
				{
					"name": "Approval Workflow Providers Delete Business Flows",
					"value": "Approval Workflow Providers Delete Business Flows",
					"action": "Delete navigation property businessFlows for approvalWorkflowProviders",
					"description": "Delete navigation property businessFlows for approvalWorkflowProviders",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/approvalWorkflowProviders/{{$parameter[\"approvalWorkflowProvider-id\"]}}/businessFlows/{{$parameter[\"businessFlow-id\"]}}"
						}
					}
				},
				{
					"name": "Approval Workflow Providers Get Business Flows",
					"value": "Approval Workflow Providers Get Business Flows",
					"action": "Get businessFlows from approvalWorkflowProviders",
					"description": "Get businessFlows from approvalWorkflowProviders",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/approvalWorkflowProviders/{{$parameter[\"approvalWorkflowProvider-id\"]}}/businessFlows/{{$parameter[\"businessFlow-id\"]}}"
						}
					}
				},
				{
					"name": "Approval Workflow Providers Update Business Flows",
					"value": "Approval Workflow Providers Update Business Flows",
					"action": "Update the navigation property businessFlows in approvalWorkflowProviders",
					"description": "Update the navigation property businessFlows in approvalWorkflowProviders",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/approvalWorkflowProviders/{{$parameter[\"approvalWorkflowProvider-id\"]}}/businessFlows/{{$parameter[\"businessFlow-id\"]}}"
						}
					}
				},
				{
					"name": "Approval Workflow Providers List Business Flows With Requests Awaiting My Decision",
					"value": "Approval Workflow Providers List Business Flows With Requests Awaiting My Decision",
					"action": "Get businessFlowsWithRequestsAwaitingMyDecision from approvalWorkflowProviders",
					"description": "Get businessFlowsWithRequestsAwaitingMyDecision from approvalWorkflowProviders",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/approvalWorkflowProviders/{{$parameter[\"approvalWorkflowProvider-id\"]}}/businessFlowsWithRequestsAwaitingMyDecision"
						}
					}
				},
				{
					"name": "Approval Workflow Providers Create Business Flows With Requests Awaiting My Decision",
					"value": "Approval Workflow Providers Create Business Flows With Requests Awaiting My Decision",
					"action": "Create new navigation property to businessFlowsWithRequestsAwaitingMyDecision for approvalWorkflowProviders",
					"description": "Create new navigation property to businessFlowsWithRequestsAwaitingMyDecision for approvalWorkflowProviders",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/approvalWorkflowProviders/{{$parameter[\"approvalWorkflowProvider-id\"]}}/businessFlowsWithRequestsAwaitingMyDecision"
						}
					}
				},
				{
					"name": "Approval Workflow Providers Delete Business Flows With Requests Awaiting My Decision",
					"value": "Approval Workflow Providers Delete Business Flows With Requests Awaiting My Decision",
					"action": "Delete navigation property businessFlowsWithRequestsAwaitingMyDecision for approvalWorkflowProviders",
					"description": "Delete navigation property businessFlowsWithRequestsAwaitingMyDecision for approvalWorkflowProviders",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/approvalWorkflowProviders/{{$parameter[\"approvalWorkflowProvider-id\"]}}/businessFlowsWithRequestsAwaitingMyDecision/{{$parameter[\"businessFlow-id\"]}}"
						}
					}
				},
				{
					"name": "Approval Workflow Providers Get Business Flows With Requests Awaiting My Decision",
					"value": "Approval Workflow Providers Get Business Flows With Requests Awaiting My Decision",
					"action": "Get businessFlowsWithRequestsAwaitingMyDecision from approvalWorkflowProviders",
					"description": "Get businessFlowsWithRequestsAwaitingMyDecision from approvalWorkflowProviders",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/approvalWorkflowProviders/{{$parameter[\"approvalWorkflowProvider-id\"]}}/businessFlowsWithRequestsAwaitingMyDecision/{{$parameter[\"businessFlow-id\"]}}"
						}
					}
				},
				{
					"name": "Approval Workflow Providers Update Business Flows With Requests Awaiting My Decision",
					"value": "Approval Workflow Providers Update Business Flows With Requests Awaiting My Decision",
					"action": "Update the navigation property businessFlowsWithRequestsAwaitingMyDecision in approvalWorkflowProviders",
					"description": "Update the navigation property businessFlowsWithRequestsAwaitingMyDecision in approvalWorkflowProviders",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/approvalWorkflowProviders/{{$parameter[\"approvalWorkflowProvider-id\"]}}/businessFlowsWithRequestsAwaitingMyDecision/{{$parameter[\"businessFlow-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers List Business Flows"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers List Business Flows"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers List Business Flows"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers List Business Flows"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers List Business Flows"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers List Business Flows"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers List Business Flows"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers List Business Flows"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers List Business Flows"
					]
				}
			}
		},
		{
			"displayName": "POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers Create Business Flows"
					]
				}
			}
		},
		{
			"displayName": "POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers Create Business Flows"
					]
				}
			}
		},
		{
			"displayName": "DELETE /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers Delete Business Flows"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers Delete Business Flows"
					]
				}
			}
		},
		{
			"displayName": "GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers Get Business Flows"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers Get Business Flows"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers Get Business Flows"
					]
				}
			}
		},
		{
			"displayName": "PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers Update Business Flows"
					]
				}
			}
		},
		{
			"displayName": "PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers Update Business Flows"
					]
				}
			}
		},
		{
			"displayName": "GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers List Business Flows With Requests Awaiting My Decision"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers List Business Flows With Requests Awaiting My Decision"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers List Business Flows With Requests Awaiting My Decision"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers List Business Flows With Requests Awaiting My Decision"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers List Business Flows With Requests Awaiting My Decision"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers List Business Flows With Requests Awaiting My Decision"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers List Business Flows With Requests Awaiting My Decision"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers List Business Flows With Requests Awaiting My Decision"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers List Business Flows With Requests Awaiting My Decision"
					]
				}
			}
		},
		{
			"displayName": "POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers Create Business Flows With Requests Awaiting My Decision"
					]
				}
			}
		},
		{
			"displayName": "POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers Create Business Flows With Requests Awaiting My Decision"
					]
				}
			}
		},
		{
			"displayName": "DELETE /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers Delete Business Flows With Requests Awaiting My Decision"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers Delete Business Flows With Requests Awaiting My Decision"
					]
				}
			}
		},
		{
			"displayName": "GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers Get Business Flows With Requests Awaiting My Decision"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers Get Business Flows With Requests Awaiting My Decision"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers Get Business Flows With Requests Awaiting My Decision"
					]
				}
			}
		},
		{
			"displayName": "PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers Update Business Flows With Requests Awaiting My Decision"
					]
				}
			}
		},
		{
			"displayName": "PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Business Flow"
					],
					"operation": [
						"Approval Workflow Providers Update Business Flows With Requests Awaiting My Decision"
					]
				}
			}
		},
];
