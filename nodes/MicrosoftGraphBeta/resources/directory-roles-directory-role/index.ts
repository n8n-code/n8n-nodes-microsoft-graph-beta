import type { INodeProperties } from 'n8n-workflow';

export const directoryRolesDirectoryRoleDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Roles Directory Role"
					]
				}
			},
			"options": [
				{
					"name": "Directory Roles Directory Role List Directory Role",
					"value": "Directory Roles Directory Role List Directory Role",
					"action": "List directoryRoles",
					"description": "List the directory roles that are activated in the tenant. This operation only returns roles that have been activated. A role becomes activated when an admin activates the role using the Activate directoryRole API. Not all built-in roles are initially activated.  When assigning a role using the Azure portal, the role activation step is implicitly done on the admin's behalf. To get the full list of roles that are available in Azure AD, use List directoryRoleTemplates.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directoryRoles"
						}
					}
				},
				{
					"name": "Directory Roles Directory Role Create Directory Role",
					"value": "Directory Roles Directory Role Create Directory Role",
					"action": "Activate directoryRole",
					"description": "Activate a directory role. To read a directory role or update its members, it must first be activated in the tenant. The Company Administrators and the implicit user directory roles (**User**, **Guest User**, and **Restricted Guest User** roles) are activated by default. To access and assign members to other directory roles, you must first activate it with its corresponding directory role template ID.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directoryRoles"
						}
					}
				},
				{
					"name": "Directory Roles Directory Role Delete Directory Role",
					"value": "Directory Roles Directory Role Delete Directory Role",
					"action": "Delete entity from directoryRoles",
					"description": "Delete entity from directoryRoles",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/directoryRoles/{{$parameter[\"directoryRole-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Roles Directory Role Get Directory Role",
					"value": "Directory Roles Directory Role Get Directory Role",
					"action": "Get directoryRole",
					"description": "Retrieve the properties of a directoryRole object. You can use both the object ID and template ID of the **directoryRole** with this API. The template ID of a built-in role is immutable and can be seen in the role description on the Azure portal. For details, see Role template IDs.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directoryRoles/{{$parameter[\"directoryRole-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Roles Directory Role Update Directory Role",
					"value": "Directory Roles Directory Role Update Directory Role",
					"action": "Update entity in directoryRoles",
					"description": "Update entity in directoryRoles",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/directoryRoles/{{$parameter[\"directoryRole-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /directoryRoles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Roles Directory Role"
					],
					"operation": [
						"Directory Roles Directory Role List Directory Role"
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
						"Directory Roles Directory Role"
					],
					"operation": [
						"Directory Roles Directory Role List Directory Role"
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
						"Directory Roles Directory Role"
					],
					"operation": [
						"Directory Roles Directory Role List Directory Role"
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
						"Directory Roles Directory Role"
					],
					"operation": [
						"Directory Roles Directory Role List Directory Role"
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
						"Directory Roles Directory Role"
					],
					"operation": [
						"Directory Roles Directory Role List Directory Role"
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
						"Directory Roles Directory Role"
					],
					"operation": [
						"Directory Roles Directory Role List Directory Role"
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
						"Directory Roles Directory Role"
					],
					"operation": [
						"Directory Roles Directory Role List Directory Role"
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
						"Directory Roles Directory Role"
					],
					"operation": [
						"Directory Roles Directory Role List Directory Role"
					]
				}
			}
		},
		{
			"displayName": "POST /directoryRoles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Roles Directory Role"
					],
					"operation": [
						"Directory Roles Directory Role Create Directory Role"
					]
				}
			}
		},
		{
			"displayName": "POST /directoryRoles<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Roles Directory Role"
					],
					"operation": [
						"Directory Roles Directory Role Create Directory Role"
					]
				}
			}
		},
		{
			"displayName": "DELETE /directoryRoles/{directoryRole-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Roles Directory Role"
					],
					"operation": [
						"Directory Roles Directory Role Delete Directory Role"
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
						"Directory Roles Directory Role"
					],
					"operation": [
						"Directory Roles Directory Role Delete Directory Role"
					]
				}
			}
		},
		{
			"displayName": "GET /directoryRoles/{directoryRole-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Roles Directory Role"
					],
					"operation": [
						"Directory Roles Directory Role Get Directory Role"
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
						"Directory Roles Directory Role"
					],
					"operation": [
						"Directory Roles Directory Role Get Directory Role"
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
						"Directory Roles Directory Role"
					],
					"operation": [
						"Directory Roles Directory Role Get Directory Role"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directoryRoles/{directoryRole-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Roles Directory Role"
					],
					"operation": [
						"Directory Roles Directory Role Update Directory Role"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directoryRoles/{directoryRole-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Roles Directory Role"
					],
					"operation": [
						"Directory Roles Directory Role Update Directory Role"
					]
				}
			}
		},
];
