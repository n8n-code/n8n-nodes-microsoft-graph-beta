import type { INodeProperties } from 'n8n-workflow';

export const governanceRoleAssignmentRequestsGovernanceRoleAssignmentRequestDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignment Requests Governance Role Assignment Request"
					]
				}
			},
			"options": [
				{
					"name": "Governance Role Assignment Requests Governance Role Assignment Request List Governance Role Assignment Request",
					"value": "Governance Role Assignment Requests Governance Role Assignment Request List Governance Role Assignment Request",
					"action": "Get entities from governanceRoleAssignmentRequests",
					"description": "Get entities from governanceRoleAssignmentRequests",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceRoleAssignmentRequests"
						}
					}
				},
				{
					"name": "Governance Role Assignment Requests Governance Role Assignment Request Create Governance Role Assignment Request",
					"value": "Governance Role Assignment Requests Governance Role Assignment Request Create Governance Role Assignment Request",
					"action": "Add new entity to governanceRoleAssignmentRequests",
					"description": "Add new entity to governanceRoleAssignmentRequests",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/governanceRoleAssignmentRequests"
						}
					}
				},
				{
					"name": "Governance Role Assignment Requests Governance Role Assignment Request Delete Governance Role Assignment Request",
					"value": "Governance Role Assignment Requests Governance Role Assignment Request Delete Governance Role Assignment Request",
					"action": "Delete entity from governanceRoleAssignmentRequests",
					"description": "Delete entity from governanceRoleAssignmentRequests",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/governanceRoleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Governance Role Assignment Requests Governance Role Assignment Request Get Governance Role Assignment Request",
					"value": "Governance Role Assignment Requests Governance Role Assignment Request Get Governance Role Assignment Request",
					"action": "Get entity from governanceRoleAssignmentRequests by key",
					"description": "Get entity from governanceRoleAssignmentRequests by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceRoleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Governance Role Assignment Requests Governance Role Assignment Request Update Governance Role Assignment Request",
					"value": "Governance Role Assignment Requests Governance Role Assignment Request Update Governance Role Assignment Request",
					"action": "Update entity in governanceRoleAssignmentRequests",
					"description": "Update entity in governanceRoleAssignmentRequests",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/governanceRoleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /governanceRoleAssignmentRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignment Requests Governance Role Assignment Request"
					],
					"operation": [
						"Governance Role Assignment Requests Governance Role Assignment Request List Governance Role Assignment Request"
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
						"Governance Role Assignment Requests Governance Role Assignment Request"
					],
					"operation": [
						"Governance Role Assignment Requests Governance Role Assignment Request List Governance Role Assignment Request"
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
						"Governance Role Assignment Requests Governance Role Assignment Request"
					],
					"operation": [
						"Governance Role Assignment Requests Governance Role Assignment Request List Governance Role Assignment Request"
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
						"Governance Role Assignment Requests Governance Role Assignment Request"
					],
					"operation": [
						"Governance Role Assignment Requests Governance Role Assignment Request List Governance Role Assignment Request"
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
						"Governance Role Assignment Requests Governance Role Assignment Request"
					],
					"operation": [
						"Governance Role Assignment Requests Governance Role Assignment Request List Governance Role Assignment Request"
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
						"Governance Role Assignment Requests Governance Role Assignment Request"
					],
					"operation": [
						"Governance Role Assignment Requests Governance Role Assignment Request List Governance Role Assignment Request"
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
						"Governance Role Assignment Requests Governance Role Assignment Request"
					],
					"operation": [
						"Governance Role Assignment Requests Governance Role Assignment Request List Governance Role Assignment Request"
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
						"Governance Role Assignment Requests Governance Role Assignment Request"
					],
					"operation": [
						"Governance Role Assignment Requests Governance Role Assignment Request List Governance Role Assignment Request"
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
						"Governance Role Assignment Requests Governance Role Assignment Request"
					],
					"operation": [
						"Governance Role Assignment Requests Governance Role Assignment Request List Governance Role Assignment Request"
					]
				}
			}
		},
		{
			"displayName": "POST /governanceRoleAssignmentRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignment Requests Governance Role Assignment Request"
					],
					"operation": [
						"Governance Role Assignment Requests Governance Role Assignment Request Create Governance Role Assignment Request"
					]
				}
			}
		},
		{
			"displayName": "POST /governanceRoleAssignmentRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignment Requests Governance Role Assignment Request"
					],
					"operation": [
						"Governance Role Assignment Requests Governance Role Assignment Request Create Governance Role Assignment Request"
					]
				}
			}
		},
		{
			"displayName": "DELETE /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignment Requests Governance Role Assignment Request"
					],
					"operation": [
						"Governance Role Assignment Requests Governance Role Assignment Request Delete Governance Role Assignment Request"
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
						"Governance Role Assignment Requests Governance Role Assignment Request"
					],
					"operation": [
						"Governance Role Assignment Requests Governance Role Assignment Request Delete Governance Role Assignment Request"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignment Requests Governance Role Assignment Request"
					],
					"operation": [
						"Governance Role Assignment Requests Governance Role Assignment Request Get Governance Role Assignment Request"
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
						"Governance Role Assignment Requests Governance Role Assignment Request"
					],
					"operation": [
						"Governance Role Assignment Requests Governance Role Assignment Request Get Governance Role Assignment Request"
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
						"Governance Role Assignment Requests Governance Role Assignment Request"
					],
					"operation": [
						"Governance Role Assignment Requests Governance Role Assignment Request Get Governance Role Assignment Request"
					]
				}
			}
		},
		{
			"displayName": "PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignment Requests Governance Role Assignment Request"
					],
					"operation": [
						"Governance Role Assignment Requests Governance Role Assignment Request Update Governance Role Assignment Request"
					]
				}
			}
		},
		{
			"displayName": "PATCH /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignment Requests Governance Role Assignment Request"
					],
					"operation": [
						"Governance Role Assignment Requests Governance Role Assignment Request Update Governance Role Assignment Request"
					]
				}
			}
		},
];
