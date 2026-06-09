import type { INodeProperties } from 'n8n-workflow';

export const privilegedAccessGovernanceRoleSettingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Setting"
					]
				}
			},
			"options": [
				{
					"name": "Privileged Access List Role Settings",
					"value": "Privileged Access List Role Settings",
					"action": "Get roleSettings from privilegedAccess",
					"description": "A collection of role settings for the provider.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleSettings"
						}
					}
				},
				{
					"name": "Privileged Access Create Role Settings",
					"value": "Privileged Access Create Role Settings",
					"action": "Create new navigation property to roleSettings for privilegedAccess",
					"description": "Create new navigation property to roleSettings for privilegedAccess",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleSettings"
						}
					}
				},
				{
					"name": "Privileged Access Delete Role Settings",
					"value": "Privileged Access Delete Role Settings",
					"action": "Delete navigation property roleSettings for privilegedAccess",
					"description": "Delete navigation property roleSettings for privilegedAccess",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Access Get Role Settings",
					"value": "Privileged Access Get Role Settings",
					"action": "Get roleSettings from privilegedAccess",
					"description": "A collection of role settings for the provider.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Access Update Role Settings",
					"value": "Privileged Access Update Role Settings",
					"action": "Update the navigation property roleSettings in privilegedAccess",
					"description": "Update the navigation property roleSettings in privilegedAccess",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Access Role Settings Get Resource",
					"value": "Privileged Access Role Settings Get Resource",
					"action": "Get resource from privilegedAccess",
					"description": "Read-only. The associated resource for this role setting.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}/resource"
						}
					}
				},
				{
					"name": "Privileged Access Role Settings Delete Role Definition",
					"value": "Privileged Access Role Settings Delete Role Definition",
					"action": "Delete navigation property roleDefinition for privilegedAccess",
					"description": "Delete navigation property roleDefinition for privilegedAccess",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Privileged Access Role Settings Get Role Definition",
					"value": "Privileged Access Role Settings Get Role Definition",
					"action": "Get roleDefinition from privilegedAccess",
					"description": "Read-only. The role definition that is enforced with this role setting.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Privileged Access Role Settings Update Role Definition",
					"value": "Privileged Access Role Settings Update Role Definition",
					"action": "Update the navigation property roleDefinition in privilegedAccess",
					"description": "Update the navigation property roleDefinition in privilegedAccess",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}/roleDefinition"
						}
					}
				},
				{
					"name": "Privileged Access Role Settings Role Definition Get Resource",
					"value": "Privileged Access Role Settings Role Definition Get Resource",
					"action": "Get resource from privilegedAccess",
					"description": "Read-only. The associated resource for the role definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}/roleDefinition/resource"
						}
					}
				},
				{
					"name": "Privileged Access Role Settings Role Definition Get Role Setting",
					"value": "Privileged Access Role Settings Role Definition Get Role Setting",
					"action": "Get roleSetting from privilegedAccess",
					"description": "The associated role setting for the role definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedAccess/{{$parameter[\"privilegedAccess-id\"]}}/roleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}/roleDefinition/roleSetting"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/roleSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access List Role Settings"
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
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access List Role Settings"
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
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access List Role Settings"
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
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access List Role Settings"
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
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access List Role Settings"
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
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access List Role Settings"
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
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access List Role Settings"
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
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access List Role Settings"
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
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access List Role Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedAccess/{privilegedAccess-id}/roleSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access Create Role Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedAccess/{privilegedAccess-id}/roleSettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access Create Role Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /privilegedAccess/{privilegedAccess-id}/roleSettings/{governanceRoleSetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access Delete Role Settings"
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
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access Delete Role Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/roleSettings/{governanceRoleSetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access Get Role Settings"
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
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access Get Role Settings"
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
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access Get Role Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/roleSettings/{governanceRoleSetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access Update Role Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/roleSettings/{governanceRoleSetting-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access Update Role Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/roleSettings/{governanceRoleSetting-id}/resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access Role Settings Get Resource"
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
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access Role Settings Get Resource"
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
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access Role Settings Get Resource"
					]
				}
			}
		},
		{
			"displayName": "DELETE /privilegedAccess/{privilegedAccess-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access Role Settings Delete Role Definition"
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
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access Role Settings Delete Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access Role Settings Get Role Definition"
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
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access Role Settings Get Role Definition"
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
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access Role Settings Get Role Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access Role Settings Update Role Definition"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedAccess/{privilegedAccess-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access Role Settings Update Role Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition/resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access Role Settings Role Definition Get Resource"
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
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access Role Settings Role Definition Get Resource"
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
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access Role Settings Role Definition Get Resource"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedAccess/{privilegedAccess-id}/roleSettings/{governanceRoleSetting-id}/roleDefinition/roleSetting",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access Role Settings Role Definition Get Role Setting"
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
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access Role Settings Role Definition Get Role Setting"
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
						"Privileged Access Governance Role Setting"
					],
					"operation": [
						"Privileged Access Role Settings Role Definition Get Role Setting"
					]
				}
			}
		},
];
