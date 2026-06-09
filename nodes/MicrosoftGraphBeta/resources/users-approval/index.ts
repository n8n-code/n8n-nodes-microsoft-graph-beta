import type { INodeProperties } from 'n8n-workflow';

export const usersApprovalDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users Approval"
					]
				}
			},
			"options": [
				{
					"name": "Users List Approvals",
					"value": "Users List Approvals",
					"action": "Get approvals from users",
					"description": "Get approvals from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/approvals"
						}
					}
				},
				{
					"name": "Users Create Approvals",
					"value": "Users Create Approvals",
					"action": "Create new navigation property to approvals for users",
					"description": "Create new navigation property to approvals for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/approvals"
						}
					}
				},
				{
					"name": "Users Delete Approvals",
					"value": "Users Delete Approvals",
					"action": "Delete navigation property approvals for users",
					"description": "Delete navigation property approvals for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/approvals/{{$parameter[\"approval-id\"]}}"
						}
					}
				},
				{
					"name": "Users Get Approvals",
					"value": "Users Get Approvals",
					"action": "Get approvals from users",
					"description": "Get approvals from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/approvals/{{$parameter[\"approval-id\"]}}"
						}
					}
				},
				{
					"name": "Users Update Approvals",
					"value": "Users Update Approvals",
					"action": "Update the navigation property approvals in users",
					"description": "Update the navigation property approvals in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/approvals/{{$parameter[\"approval-id\"]}}"
						}
					}
				},
				{
					"name": "Users Approvals List Steps",
					"value": "Users Approvals List Steps",
					"action": "List approvalSteps",
					"description": "In Azure AD entitlement management, lists the approvalStep objects associated with an approval object.  This call can be made by an approver, providing the identifier of the access package assignment request.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/approvals/{{$parameter[\"approval-id\"]}}/steps"
						}
					}
				},
				{
					"name": "Users Approvals Create Steps",
					"value": "Users Approvals Create Steps",
					"action": "Create new navigation property to steps for users",
					"description": "Create new navigation property to steps for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/approvals/{{$parameter[\"approval-id\"]}}/steps"
						}
					}
				},
				{
					"name": "Users Approvals Delete Steps",
					"value": "Users Approvals Delete Steps",
					"action": "Delete navigation property steps for users",
					"description": "Delete navigation property steps for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/approvals/{{$parameter[\"approval-id\"]}}/steps/{{$parameter[\"approvalStep-id\"]}}"
						}
					}
				},
				{
					"name": "Users Approvals Get Steps",
					"value": "Users Approvals Get Steps",
					"action": "Get steps from users",
					"description": "Get steps from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/approvals/{{$parameter[\"approval-id\"]}}/steps/{{$parameter[\"approvalStep-id\"]}}"
						}
					}
				},
				{
					"name": "Users Approvals Update Steps",
					"value": "Users Approvals Update Steps",
					"action": "Update the navigation property steps in users",
					"description": "Update the navigation property steps in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/approvals/{{$parameter[\"approval-id\"]}}/steps/{{$parameter[\"approvalStep-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users/{user-id}/approvals",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Approval"
					],
					"operation": [
						"Users List Approvals"
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
						"Users Approval"
					],
					"operation": [
						"Users List Approvals"
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
						"Users Approval"
					],
					"operation": [
						"Users List Approvals"
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
						"Users Approval"
					],
					"operation": [
						"Users List Approvals"
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
						"Users Approval"
					],
					"operation": [
						"Users List Approvals"
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
						"Users Approval"
					],
					"operation": [
						"Users List Approvals"
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
						"Users Approval"
					],
					"operation": [
						"Users List Approvals"
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
						"Users Approval"
					],
					"operation": [
						"Users List Approvals"
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
						"Users Approval"
					],
					"operation": [
						"Users List Approvals"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/approvals",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Approval"
					],
					"operation": [
						"Users Create Approvals"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/approvals<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Approval"
					],
					"operation": [
						"Users Create Approvals"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/approvals/{approval-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Approval"
					],
					"operation": [
						"Users Delete Approvals"
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
						"Users Approval"
					],
					"operation": [
						"Users Delete Approvals"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/approvals/{approval-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Approval"
					],
					"operation": [
						"Users Get Approvals"
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
						"Users Approval"
					],
					"operation": [
						"Users Get Approvals"
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
						"Users Approval"
					],
					"operation": [
						"Users Get Approvals"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/approvals/{approval-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Approval"
					],
					"operation": [
						"Users Update Approvals"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/approvals/{approval-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Approval"
					],
					"operation": [
						"Users Update Approvals"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/approvals/{approval-id}/steps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Approval"
					],
					"operation": [
						"Users Approvals List Steps"
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
						"Users Approval"
					],
					"operation": [
						"Users Approvals List Steps"
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
						"Users Approval"
					],
					"operation": [
						"Users Approvals List Steps"
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
						"Users Approval"
					],
					"operation": [
						"Users Approvals List Steps"
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
						"Users Approval"
					],
					"operation": [
						"Users Approvals List Steps"
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
						"Users Approval"
					],
					"operation": [
						"Users Approvals List Steps"
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
						"Users Approval"
					],
					"operation": [
						"Users Approvals List Steps"
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
						"Users Approval"
					],
					"operation": [
						"Users Approvals List Steps"
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
						"Users Approval"
					],
					"operation": [
						"Users Approvals List Steps"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/approvals/{approval-id}/steps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Approval"
					],
					"operation": [
						"Users Approvals Create Steps"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/approvals/{approval-id}/steps<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Approval"
					],
					"operation": [
						"Users Approvals Create Steps"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/approvals/{approval-id}/steps/{approvalStep-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Approval"
					],
					"operation": [
						"Users Approvals Delete Steps"
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
						"Users Approval"
					],
					"operation": [
						"Users Approvals Delete Steps"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/approvals/{approval-id}/steps/{approvalStep-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Approval"
					],
					"operation": [
						"Users Approvals Get Steps"
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
						"Users Approval"
					],
					"operation": [
						"Users Approvals Get Steps"
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
						"Users Approval"
					],
					"operation": [
						"Users Approvals Get Steps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/approvals/{approval-id}/steps/{approvalStep-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Approval"
					],
					"operation": [
						"Users Approvals Update Steps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/approvals/{approval-id}/steps/{approvalStep-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Approval"
					],
					"operation": [
						"Users Approvals Update Steps"
					]
				}
			}
		},
];
