import type { INodeProperties } from 'n8n-workflow';

export const meApprovalDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me Approval"
					]
				}
			},
			"options": [
				{
					"name": "Me List Approvals",
					"value": "Me List Approvals",
					"action": "Get approvals from me",
					"description": "Get approvals from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/approvals"
						}
					}
				},
				{
					"name": "Me Create Approvals",
					"value": "Me Create Approvals",
					"action": "Create new navigation property to approvals for me",
					"description": "Create new navigation property to approvals for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/approvals"
						}
					}
				},
				{
					"name": "Me Delete Approvals",
					"value": "Me Delete Approvals",
					"action": "Delete navigation property approvals for me",
					"description": "Delete navigation property approvals for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/approvals/{{$parameter[\"approval-id\"]}}"
						}
					}
				},
				{
					"name": "Me Get Approvals",
					"value": "Me Get Approvals",
					"action": "Get approvals from me",
					"description": "Get approvals from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/approvals/{{$parameter[\"approval-id\"]}}"
						}
					}
				},
				{
					"name": "Me Update Approvals",
					"value": "Me Update Approvals",
					"action": "Update the navigation property approvals in me",
					"description": "Update the navigation property approvals in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/approvals/{{$parameter[\"approval-id\"]}}"
						}
					}
				},
				{
					"name": "Me Approvals List Steps",
					"value": "Me Approvals List Steps",
					"action": "List approvalSteps",
					"description": "In Azure AD entitlement management, lists the approvalStep objects associated with an approval object.  This call can be made by an approver, providing the identifier of the access package assignment request.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/approvals/{{$parameter[\"approval-id\"]}}/steps"
						}
					}
				},
				{
					"name": "Me Approvals Create Steps",
					"value": "Me Approvals Create Steps",
					"action": "Create new navigation property to steps for me",
					"description": "Create new navigation property to steps for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/approvals/{{$parameter[\"approval-id\"]}}/steps"
						}
					}
				},
				{
					"name": "Me Approvals Delete Steps",
					"value": "Me Approvals Delete Steps",
					"action": "Delete navigation property steps for me",
					"description": "Delete navigation property steps for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/approvals/{{$parameter[\"approval-id\"]}}/steps/{{$parameter[\"approvalStep-id\"]}}"
						}
					}
				},
				{
					"name": "Me Approvals Get Steps",
					"value": "Me Approvals Get Steps",
					"action": "Get steps from me",
					"description": "Get steps from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/approvals/{{$parameter[\"approval-id\"]}}/steps/{{$parameter[\"approvalStep-id\"]}}"
						}
					}
				},
				{
					"name": "Me Approvals Update Steps",
					"value": "Me Approvals Update Steps",
					"action": "Update the navigation property steps in me",
					"description": "Update the navigation property steps in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/approvals/{{$parameter[\"approval-id\"]}}/steps/{{$parameter[\"approvalStep-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /me/approvals",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Approval"
					],
					"operation": [
						"Me List Approvals"
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
						"Me Approval"
					],
					"operation": [
						"Me List Approvals"
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
						"Me Approval"
					],
					"operation": [
						"Me List Approvals"
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
						"Me Approval"
					],
					"operation": [
						"Me List Approvals"
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
						"Me Approval"
					],
					"operation": [
						"Me List Approvals"
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
						"Me Approval"
					],
					"operation": [
						"Me List Approvals"
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
						"Me Approval"
					],
					"operation": [
						"Me List Approvals"
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
						"Me Approval"
					],
					"operation": [
						"Me List Approvals"
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
						"Me Approval"
					],
					"operation": [
						"Me List Approvals"
					]
				}
			}
		},
		{
			"displayName": "POST /me/approvals",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Approval"
					],
					"operation": [
						"Me Create Approvals"
					]
				}
			}
		},
		{
			"displayName": "POST /me/approvals<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Approval"
					],
					"operation": [
						"Me Create Approvals"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/approvals/{approval-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Approval"
					],
					"operation": [
						"Me Delete Approvals"
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
						"Me Approval"
					],
					"operation": [
						"Me Delete Approvals"
					]
				}
			}
		},
		{
			"displayName": "GET /me/approvals/{approval-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Approval"
					],
					"operation": [
						"Me Get Approvals"
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
						"Me Approval"
					],
					"operation": [
						"Me Get Approvals"
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
						"Me Approval"
					],
					"operation": [
						"Me Get Approvals"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/approvals/{approval-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Approval"
					],
					"operation": [
						"Me Update Approvals"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/approvals/{approval-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Approval"
					],
					"operation": [
						"Me Update Approvals"
					]
				}
			}
		},
		{
			"displayName": "GET /me/approvals/{approval-id}/steps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Approval"
					],
					"operation": [
						"Me Approvals List Steps"
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
						"Me Approval"
					],
					"operation": [
						"Me Approvals List Steps"
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
						"Me Approval"
					],
					"operation": [
						"Me Approvals List Steps"
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
						"Me Approval"
					],
					"operation": [
						"Me Approvals List Steps"
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
						"Me Approval"
					],
					"operation": [
						"Me Approvals List Steps"
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
						"Me Approval"
					],
					"operation": [
						"Me Approvals List Steps"
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
						"Me Approval"
					],
					"operation": [
						"Me Approvals List Steps"
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
						"Me Approval"
					],
					"operation": [
						"Me Approvals List Steps"
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
						"Me Approval"
					],
					"operation": [
						"Me Approvals List Steps"
					]
				}
			}
		},
		{
			"displayName": "POST /me/approvals/{approval-id}/steps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Approval"
					],
					"operation": [
						"Me Approvals Create Steps"
					]
				}
			}
		},
		{
			"displayName": "POST /me/approvals/{approval-id}/steps<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Approval"
					],
					"operation": [
						"Me Approvals Create Steps"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/approvals/{approval-id}/steps/{approvalStep-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Approval"
					],
					"operation": [
						"Me Approvals Delete Steps"
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
						"Me Approval"
					],
					"operation": [
						"Me Approvals Delete Steps"
					]
				}
			}
		},
		{
			"displayName": "GET /me/approvals/{approval-id}/steps/{approvalStep-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Approval"
					],
					"operation": [
						"Me Approvals Get Steps"
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
						"Me Approval"
					],
					"operation": [
						"Me Approvals Get Steps"
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
						"Me Approval"
					],
					"operation": [
						"Me Approvals Get Steps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/approvals/{approval-id}/steps/{approvalStep-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Approval"
					],
					"operation": [
						"Me Approvals Update Steps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/approvals/{approval-id}/steps/{approvalStep-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Approval"
					],
					"operation": [
						"Me Approvals Update Steps"
					]
				}
			}
		},
];
