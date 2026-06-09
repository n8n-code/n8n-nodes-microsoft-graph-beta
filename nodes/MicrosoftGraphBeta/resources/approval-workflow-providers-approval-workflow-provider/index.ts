import type { INodeProperties } from 'n8n-workflow';

export const approvalWorkflowProvidersApprovalWorkflowProviderDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Approval Workflow Provider"
					]
				}
			},
			"options": [
				{
					"name": "Approval Workflow Providers Approval Workflow Provider List Approval Workflow Provider",
					"value": "Approval Workflow Providers Approval Workflow Provider List Approval Workflow Provider",
					"action": "Get entities from approvalWorkflowProviders",
					"description": "Get entities from approvalWorkflowProviders",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/approvalWorkflowProviders"
						}
					}
				},
				{
					"name": "Approval Workflow Providers Approval Workflow Provider Create Approval Workflow Provider",
					"value": "Approval Workflow Providers Approval Workflow Provider Create Approval Workflow Provider",
					"action": "Add new entity to approvalWorkflowProviders",
					"description": "Add new entity to approvalWorkflowProviders",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/approvalWorkflowProviders"
						}
					}
				},
				{
					"name": "Approval Workflow Providers Approval Workflow Provider Delete Approval Workflow Provider",
					"value": "Approval Workflow Providers Approval Workflow Provider Delete Approval Workflow Provider",
					"action": "Delete entity from approvalWorkflowProviders",
					"description": "Delete entity from approvalWorkflowProviders",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/approvalWorkflowProviders/{{$parameter[\"approvalWorkflowProvider-id\"]}}"
						}
					}
				},
				{
					"name": "Approval Workflow Providers Approval Workflow Provider Get Approval Workflow Provider",
					"value": "Approval Workflow Providers Approval Workflow Provider Get Approval Workflow Provider",
					"action": "Get entity from approvalWorkflowProviders by key",
					"description": "Get entity from approvalWorkflowProviders by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/approvalWorkflowProviders/{{$parameter[\"approvalWorkflowProvider-id\"]}}"
						}
					}
				},
				{
					"name": "Approval Workflow Providers Approval Workflow Provider Update Approval Workflow Provider",
					"value": "Approval Workflow Providers Approval Workflow Provider Update Approval Workflow Provider",
					"action": "Update entity in approvalWorkflowProviders",
					"description": "Update entity in approvalWorkflowProviders",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/approvalWorkflowProviders/{{$parameter[\"approvalWorkflowProvider-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /approvalWorkflowProviders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Approval Workflow Provider"
					],
					"operation": [
						"Approval Workflow Providers Approval Workflow Provider List Approval Workflow Provider"
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
						"Approval Workflow Providers Approval Workflow Provider"
					],
					"operation": [
						"Approval Workflow Providers Approval Workflow Provider List Approval Workflow Provider"
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
						"Approval Workflow Providers Approval Workflow Provider"
					],
					"operation": [
						"Approval Workflow Providers Approval Workflow Provider List Approval Workflow Provider"
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
						"Approval Workflow Providers Approval Workflow Provider"
					],
					"operation": [
						"Approval Workflow Providers Approval Workflow Provider List Approval Workflow Provider"
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
						"Approval Workflow Providers Approval Workflow Provider"
					],
					"operation": [
						"Approval Workflow Providers Approval Workflow Provider List Approval Workflow Provider"
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
						"Approval Workflow Providers Approval Workflow Provider"
					],
					"operation": [
						"Approval Workflow Providers Approval Workflow Provider List Approval Workflow Provider"
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
						"Approval Workflow Providers Approval Workflow Provider"
					],
					"operation": [
						"Approval Workflow Providers Approval Workflow Provider List Approval Workflow Provider"
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
						"Approval Workflow Providers Approval Workflow Provider"
					],
					"operation": [
						"Approval Workflow Providers Approval Workflow Provider List Approval Workflow Provider"
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
						"Approval Workflow Providers Approval Workflow Provider"
					],
					"operation": [
						"Approval Workflow Providers Approval Workflow Provider List Approval Workflow Provider"
					]
				}
			}
		},
		{
			"displayName": "POST /approvalWorkflowProviders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Approval Workflow Provider"
					],
					"operation": [
						"Approval Workflow Providers Approval Workflow Provider Create Approval Workflow Provider"
					]
				}
			}
		},
		{
			"displayName": "POST /approvalWorkflowProviders<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Approval Workflow Provider"
					],
					"operation": [
						"Approval Workflow Providers Approval Workflow Provider Create Approval Workflow Provider"
					]
				}
			}
		},
		{
			"displayName": "DELETE /approvalWorkflowProviders/{approvalWorkflowProvider-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Approval Workflow Provider"
					],
					"operation": [
						"Approval Workflow Providers Approval Workflow Provider Delete Approval Workflow Provider"
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
						"Approval Workflow Providers Approval Workflow Provider"
					],
					"operation": [
						"Approval Workflow Providers Approval Workflow Provider Delete Approval Workflow Provider"
					]
				}
			}
		},
		{
			"displayName": "GET /approvalWorkflowProviders/{approvalWorkflowProvider-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Approval Workflow Provider"
					],
					"operation": [
						"Approval Workflow Providers Approval Workflow Provider Get Approval Workflow Provider"
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
						"Approval Workflow Providers Approval Workflow Provider"
					],
					"operation": [
						"Approval Workflow Providers Approval Workflow Provider Get Approval Workflow Provider"
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
						"Approval Workflow Providers Approval Workflow Provider"
					],
					"operation": [
						"Approval Workflow Providers Approval Workflow Provider Get Approval Workflow Provider"
					]
				}
			}
		},
		{
			"displayName": "PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Approval Workflow Provider"
					],
					"operation": [
						"Approval Workflow Providers Approval Workflow Provider Update Approval Workflow Provider"
					]
				}
			}
		},
		{
			"displayName": "PATCH /approvalWorkflowProviders/{approvalWorkflowProvider-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Approval Workflow Provider"
					],
					"operation": [
						"Approval Workflow Providers Approval Workflow Provider Update Approval Workflow Provider"
					]
				}
			}
		},
];
