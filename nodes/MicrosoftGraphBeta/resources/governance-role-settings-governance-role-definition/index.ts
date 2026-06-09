import type { INodeProperties } from 'n8n-workflow';

export const governanceRoleSettingsGovernanceRoleDefinitionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Settings Governance Role Definition"
					]
				}
			},
			"options": [
				{
					"name": "Governance Role Settings Delete Role Definition",
					"value": "Governance Role Settings Delete Role Definition",
					"action": "Delete navigation property roleDefinition for governanceRoleSettings",
					"description": "Delete navigation property roleDefinition for governanceRoleSettings",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/governanceRoleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Governance Role Settings Get Role Definition",
					"value": "Governance Role Settings Get Role Definition",
					"action": "Get roleDefinition from governanceRoleSettings",
					"description": "Read-only. The role definition that is enforced with this role setting.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceRoleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Governance Role Settings Update Role Definition",
					"value": "Governance Role Settings Update Role Definition",
					"action": "Update the navigation property roleDefinition in governanceRoleSettings",
					"description": "Update the navigation property roleDefinition in governanceRoleSettings",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/governanceRoleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Governance Role Settings Role Definition Get Resource",
					"value": "Governance Role Settings Role Definition Get Resource",
					"action": "Get resource from governanceRoleSettings",
					"description": "Read-only. The associated resource for the role definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceRoleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}/roleDefinition/resource"
						}
					}
				},
				{
					"name": "Governance Role Settings Role Definition Get Role Setting",
					"value": "Governance Role Settings Role Definition Get Role Setting",
					"action": "Get roleSetting from governanceRoleSettings",
					"description": "The associated role setting for the role definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceRoleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}/roleDefinition/roleSetting"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Settings Governance Role Definition"
					],
					"operation": [
						"Governance Role Settings Delete Role Definition"
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
						"Governance Role Settings Governance Role Definition"
					],
					"operation": [
						"Governance Role Settings Delete Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Settings Governance Role Definition"
					],
					"operation": [
						"Governance Role Settings Get Role Definition"
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
						"Governance Role Settings Governance Role Definition"
					],
					"operation": [
						"Governance Role Settings Get Role Definition"
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
						"Governance Role Settings Governance Role Definition"
					],
					"operation": [
						"Governance Role Settings Get Role Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Settings Governance Role Definition"
					],
					"operation": [
						"Governance Role Settings Update Role Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Settings Governance Role Definition"
					],
					"operation": [
						"Governance Role Settings Update Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition/resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Settings Governance Role Definition"
					],
					"operation": [
						"Governance Role Settings Role Definition Get Resource"
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
						"Governance Role Settings Governance Role Definition"
					],
					"operation": [
						"Governance Role Settings Role Definition Get Resource"
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
						"Governance Role Settings Governance Role Definition"
					],
					"operation": [
						"Governance Role Settings Role Definition Get Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /governanceRoleSettings/{governanceRoleSetting-id}/roleDefinition/roleSetting",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Settings Governance Role Definition"
					],
					"operation": [
						"Governance Role Settings Role Definition Get Role Setting"
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
						"Governance Role Settings Governance Role Definition"
					],
					"operation": [
						"Governance Role Settings Role Definition Get Role Setting"
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
						"Governance Role Settings Governance Role Definition"
					],
					"operation": [
						"Governance Role Settings Role Definition Get Role Setting"
					]
				}
			}
		},
];
