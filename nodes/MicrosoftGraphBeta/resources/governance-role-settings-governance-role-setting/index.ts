import type { INodeProperties } from 'n8n-workflow';

export const governanceRoleSettingsGovernanceRoleSettingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Settings Governance Role Setting"
					]
				}
			},
			"options": [
				{
					"name": "Governance Role Settings Governance Role Setting List Governance Role Setting",
					"value": "Governance Role Settings Governance Role Setting List Governance Role Setting",
					"action": "Get entities from governanceRoleSettings",
					"description": "Get entities from governanceRoleSettings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceRoleSettings"
						}
					}
				},
				{
					"name": "Governance Role Settings Governance Role Setting Create Governance Role Setting",
					"value": "Governance Role Settings Governance Role Setting Create Governance Role Setting",
					"action": "Add new entity to governanceRoleSettings",
					"description": "Add new entity to governanceRoleSettings",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/governanceRoleSettings"
						}
					}
				},
				{
					"name": "Governance Role Settings Governance Role Setting Delete Governance Role Setting",
					"value": "Governance Role Settings Governance Role Setting Delete Governance Role Setting",
					"action": "Delete entity from governanceRoleSettings",
					"description": "Delete entity from governanceRoleSettings",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/governanceRoleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}"
						}
					}
				},
				{
					"name": "Governance Role Settings Governance Role Setting Get Governance Role Setting",
					"value": "Governance Role Settings Governance Role Setting Get Governance Role Setting",
					"action": "Get entity from governanceRoleSettings by key",
					"description": "Get entity from governanceRoleSettings by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceRoleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}"
						}
					}
				},
				{
					"name": "Governance Role Settings Governance Role Setting Update Governance Role Setting",
					"value": "Governance Role Settings Governance Role Setting Update Governance Role Setting",
					"action": "Update entity in governanceRoleSettings",
					"description": "Update entity in governanceRoleSettings",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/governanceRoleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /governanceRoleSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Settings Governance Role Setting"
					],
					"operation": [
						"Governance Role Settings Governance Role Setting List Governance Role Setting"
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
						"Governance Role Settings Governance Role Setting"
					],
					"operation": [
						"Governance Role Settings Governance Role Setting List Governance Role Setting"
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
						"Governance Role Settings Governance Role Setting"
					],
					"operation": [
						"Governance Role Settings Governance Role Setting List Governance Role Setting"
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
						"Governance Role Settings Governance Role Setting"
					],
					"operation": [
						"Governance Role Settings Governance Role Setting List Governance Role Setting"
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
						"Governance Role Settings Governance Role Setting"
					],
					"operation": [
						"Governance Role Settings Governance Role Setting List Governance Role Setting"
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
						"Governance Role Settings Governance Role Setting"
					],
					"operation": [
						"Governance Role Settings Governance Role Setting List Governance Role Setting"
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
						"Governance Role Settings Governance Role Setting"
					],
					"operation": [
						"Governance Role Settings Governance Role Setting List Governance Role Setting"
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
						"Governance Role Settings Governance Role Setting"
					],
					"operation": [
						"Governance Role Settings Governance Role Setting List Governance Role Setting"
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
						"Governance Role Settings Governance Role Setting"
					],
					"operation": [
						"Governance Role Settings Governance Role Setting List Governance Role Setting"
					]
				}
			}
		},
		{
			"displayName": "POST /governanceRoleSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Settings Governance Role Setting"
					],
					"operation": [
						"Governance Role Settings Governance Role Setting Create Governance Role Setting"
					]
				}
			}
		},
		{
			"displayName": "POST /governanceRoleSettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Settings Governance Role Setting"
					],
					"operation": [
						"Governance Role Settings Governance Role Setting Create Governance Role Setting"
					]
				}
			}
		},
		{
			"displayName": "DELETE /governanceRoleSettings/{governanceRoleSetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Settings Governance Role Setting"
					],
					"operation": [
						"Governance Role Settings Governance Role Setting Delete Governance Role Setting"
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
						"Governance Role Settings Governance Role Setting"
					],
					"operation": [
						"Governance Role Settings Governance Role Setting Delete Governance Role Setting"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceRoleSettings/{governanceRoleSetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Settings Governance Role Setting"
					],
					"operation": [
						"Governance Role Settings Governance Role Setting Get Governance Role Setting"
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
						"Governance Role Settings Governance Role Setting"
					],
					"operation": [
						"Governance Role Settings Governance Role Setting Get Governance Role Setting"
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
						"Governance Role Settings Governance Role Setting"
					],
					"operation": [
						"Governance Role Settings Governance Role Setting Get Governance Role Setting"
					]
				}
			}
		},
		{
			"displayName": "PATCH /governanceRoleSettings/{governanceRoleSetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Settings Governance Role Setting"
					],
					"operation": [
						"Governance Role Settings Governance Role Setting Update Governance Role Setting"
					]
				}
			}
		},
		{
			"displayName": "PATCH /governanceRoleSettings/{governanceRoleSetting-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Settings Governance Role Setting"
					],
					"operation": [
						"Governance Role Settings Governance Role Setting Update Governance Role Setting"
					]
				}
			}
		},
];
