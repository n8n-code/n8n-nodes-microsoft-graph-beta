import type { INodeProperties } from 'n8n-workflow';

export const governanceResourcesGovernanceRoleSettingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Setting"
					]
				}
			},
			"options": [
				{
					"name": "Governance Resources List Role Settings",
					"value": "Governance Resources List Role Settings",
					"action": "Get roleSettings from governanceResources",
					"description": "The collection of role settings for the resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleSettings"
						}
					}
				},
				{
					"name": "Governance Resources Create Role Settings",
					"value": "Governance Resources Create Role Settings",
					"action": "Create new navigation property to roleSettings for governanceResources",
					"description": "Create new navigation property to roleSettings for governanceResources",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleSettings"
						}
					}
				},
				{
					"name": "Governance Resources Delete Role Settings",
					"value": "Governance Resources Delete Role Settings",
					"action": "Delete navigation property roleSettings for governanceResources",
					"description": "Delete navigation property roleSettings for governanceResources",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}"
						}
					}
				},
				{
					"name": "Governance Resources Get Role Settings",
					"value": "Governance Resources Get Role Settings",
					"action": "Get roleSettings from governanceResources",
					"description": "The collection of role settings for the resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}"
						}
					}
				},
				{
					"name": "Governance Resources Update Role Settings",
					"value": "Governance Resources Update Role Settings",
					"action": "Update the navigation property roleSettings in governanceResources",
					"description": "Update the navigation property roleSettings in governanceResources",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}"
						}
					}
				},
				{
					"name": "Governance Resources Role Settings Get Resource",
					"value": "Governance Resources Role Settings Get Resource",
					"action": "Get resource from governanceResources",
					"description": "Read-only. The associated resource for this role setting.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}/resource"
						}
					}
				},
				{
					"name": "Governance Resources Role Settings Delete Role Definition",
					"value": "Governance Resources Role Settings Delete Role Definition",
					"action": "Delete navigation property roleDefinition for governanceResources",
					"description": "Delete navigation property roleDefinition for governanceResources",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Governance Resources Role Settings Get Role Definition",
					"value": "Governance Resources Role Settings Get Role Definition",
					"action": "Get roleDefinition from governanceResources",
					"description": "Read-only. The role definition that is enforced with this role setting.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Governance Resources Role Settings Update Role Definition",
					"value": "Governance Resources Role Settings Update Role Definition",
					"action": "Update the navigation property roleDefinition in governanceResources",
					"description": "Update the navigation property roleDefinition in governanceResources",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Governance Resources Role Settings Role Definition Get Resource",
					"value": "Governance Resources Role Settings Role Definition Get Resource",
					"action": "Get resource from governanceResources",
					"description": "Read-only. The associated resource for the role definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}/roleDefinition/resource"
						}
					}
				},
				{
					"name": "Governance Resources Role Settings Role Definition Get Role Setting",
					"value": "Governance Resources Role Settings Role Definition Get Role Setting",
					"action": "Get roleSetting from governanceResources",
					"description": "The associated role setting for the role definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}/roleDefinition/roleSetting"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /governanceResources/{governanceResource-id}/roleSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources List Role Settings"
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
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources List Role Settings"
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
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources List Role Settings"
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
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources List Role Settings"
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
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources List Role Settings"
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
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources List Role Settings"
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
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources List Role Settings"
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
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources List Role Settings"
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
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources List Role Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /governanceResources/{governanceResource-id}/roleSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources Create Role Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /governanceResources/{governanceResource-id}/roleSettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources Create Role Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources Delete Role Settings"
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
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources Delete Role Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources Get Role Settings"
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
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources Get Role Settings"
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
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources Get Role Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources Update Role Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources Update Role Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources Role Settings Get Resource"
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
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources Role Settings Get Resource"
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
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources Role Settings Get Resource"
					]
				}
			}
		},
		{
			"displayName": "DELETE /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources Role Settings Delete Role Definition"
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
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources Role Settings Delete Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources Role Settings Get Role Definition"
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
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources Role Settings Get Role Definition"
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
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources Role Settings Get Role Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources Role Settings Update Role Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources Role Settings Update Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition/resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources Role Settings Role Definition Get Resource"
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
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources Role Settings Role Definition Get Resource"
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
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources Role Settings Role Definition Get Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceResources/{governanceResource-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition/roleSetting",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources Role Settings Role Definition Get Role Setting"
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
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources Role Settings Role Definition Get Role Setting"
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
						"Governance Resources Governance Role Setting"
					],
					"operation": [
						"Governance Resources Role Settings Role Definition Get Role Setting"
					]
				}
			}
		},
];
