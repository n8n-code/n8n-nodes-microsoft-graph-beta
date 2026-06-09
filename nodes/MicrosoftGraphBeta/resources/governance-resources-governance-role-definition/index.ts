import type { INodeProperties } from 'n8n-workflow';

export const governanceResourcesGovernanceRoleDefinitionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Definition"
					]
				}
			},
			"options": [
				{
					"name": "Governance Resources List Role Definitions",
					"value": "Governance Resources List Role Definitions",
					"action": "Get roleDefinitions from governanceResources",
					"description": "The collection of role defintions for the resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleDefinitions"
						}
					}
				},
				{
					"name": "Governance Resources Create Role Definitions",
					"value": "Governance Resources Create Role Definitions",
					"action": "Create new navigation property to roleDefinitions for governanceResources",
					"description": "Create new navigation property to roleDefinitions for governanceResources",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleDefinitions"
						}
					}
				},
				{
					"name": "Governance Resources Delete Role Definitions",
					"value": "Governance Resources Delete Role Definitions",
					"action": "Delete navigation property roleDefinitions for governanceResources",
					"description": "Delete navigation property roleDefinitions for governanceResources",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleDefinitions/{{$parameter[\"governanceRoleDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Governance Resources Get Role Definitions",
					"value": "Governance Resources Get Role Definitions",
					"action": "Get roleDefinitions from governanceResources",
					"description": "The collection of role defintions for the resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleDefinitions/{{$parameter[\"governanceRoleDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Governance Resources Update Role Definitions",
					"value": "Governance Resources Update Role Definitions",
					"action": "Update the navigation property roleDefinitions in governanceResources",
					"description": "Update the navigation property roleDefinitions in governanceResources",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleDefinitions/{{$parameter[\"governanceRoleDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Governance Resources Role Definitions Get Resource",
					"value": "Governance Resources Role Definitions Get Resource",
					"action": "Get resource from governanceResources",
					"description": "Read-only. The associated resource for the role definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleDefinitions/{{$parameter[\"governanceRoleDefinition-id\"]}}/resource"
						}
					}
				},
				{
					"name": "Governance Resources Role Definitions Get Role Setting",
					"value": "Governance Resources Role Definitions Get Role Setting",
					"action": "Get roleSetting from governanceResources",
					"description": "The associated role setting for the role definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleDefinitions/{{$parameter[\"governanceRoleDefinition-id\"]}}/roleSetting"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /governanceResources/{governanceResource-id}/roleDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Definition"
					],
					"operation": [
						"Governance Resources List Role Definitions"
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
						"Governance Resources Governance Role Definition"
					],
					"operation": [
						"Governance Resources List Role Definitions"
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
						"Governance Resources Governance Role Definition"
					],
					"operation": [
						"Governance Resources List Role Definitions"
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
						"Governance Resources Governance Role Definition"
					],
					"operation": [
						"Governance Resources List Role Definitions"
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
						"Governance Resources Governance Role Definition"
					],
					"operation": [
						"Governance Resources List Role Definitions"
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
						"Governance Resources Governance Role Definition"
					],
					"operation": [
						"Governance Resources List Role Definitions"
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
						"Governance Resources Governance Role Definition"
					],
					"operation": [
						"Governance Resources List Role Definitions"
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
						"Governance Resources Governance Role Definition"
					],
					"operation": [
						"Governance Resources List Role Definitions"
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
						"Governance Resources Governance Role Definition"
					],
					"operation": [
						"Governance Resources List Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /governanceResources/{governanceResource-id}/roleDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Definition"
					],
					"operation": [
						"Governance Resources Create Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /governanceResources/{governanceResource-id}/roleDefinitions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Definition"
					],
					"operation": [
						"Governance Resources Create Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Definition"
					],
					"operation": [
						"Governance Resources Delete Role Definitions"
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
						"Governance Resources Governance Role Definition"
					],
					"operation": [
						"Governance Resources Delete Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Definition"
					],
					"operation": [
						"Governance Resources Get Role Definitions"
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
						"Governance Resources Governance Role Definition"
					],
					"operation": [
						"Governance Resources Get Role Definitions"
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
						"Governance Resources Governance Role Definition"
					],
					"operation": [
						"Governance Resources Get Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Definition"
					],
					"operation": [
						"Governance Resources Update Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Definition"
					],
					"operation": [
						"Governance Resources Update Role Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}/resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Definition"
					],
					"operation": [
						"Governance Resources Role Definitions Get Resource"
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
						"Governance Resources Governance Role Definition"
					],
					"operation": [
						"Governance Resources Role Definitions Get Resource"
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
						"Governance Resources Governance Role Definition"
					],
					"operation": [
						"Governance Resources Role Definitions Get Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceResources/{governanceResource-id}/roleDefinitions/{governanceRoleDefinition-id}/roleSetting",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Definition"
					],
					"operation": [
						"Governance Resources Role Definitions Get Role Setting"
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
						"Governance Resources Governance Role Definition"
					],
					"operation": [
						"Governance Resources Role Definitions Get Role Setting"
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
						"Governance Resources Governance Role Definition"
					],
					"operation": [
						"Governance Resources Role Definitions Get Role Setting"
					]
				}
			}
		},
];
