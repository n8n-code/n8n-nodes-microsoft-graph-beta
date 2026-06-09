import type { INodeProperties } from 'n8n-workflow';

export const privilegedRolesPrivilegedRoleSettingsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Roles Privileged Role Settings"
					]
				}
			},
			"options": [
				{
					"name": "Privileged Roles Delete Settings",
					"value": "Privileged Roles Delete Settings",
					"action": "Delete navigation property settings for privilegedRoles",
					"description": "Delete navigation property settings for privilegedRoles",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/privilegedRoles/{{$parameter[\"privilegedRole-id\"]}}/settings"
						}
					}
				},
				{
					"name": "Privileged Roles Get Settings",
					"value": "Privileged Roles Get Settings",
					"action": "Get privilegedRoleSettings",
					"description": "Retrieve the role settings for the given role. A privilegedRoleSettings object will be returned.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedRoles/{{$parameter[\"privilegedRole-id\"]}}/settings"
						}
					}
				},
				{
					"name": "Privileged Roles Update Settings",
					"value": "Privileged Roles Update Settings",
					"action": "Update privilegedRoleSettings",
					"description": "Update the role settings for the given role setting. A privilegedRoleSettings object will be returned.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/privilegedRoles/{{$parameter[\"privilegedRole-id\"]}}/settings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /privilegedRoles/{privilegedRole-id}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Roles Privileged Role Settings"
					],
					"operation": [
						"Privileged Roles Delete Settings"
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
						"Privileged Roles Privileged Role Settings"
					],
					"operation": [
						"Privileged Roles Delete Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedRoles/{privilegedRole-id}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Roles Privileged Role Settings"
					],
					"operation": [
						"Privileged Roles Get Settings"
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
						"Privileged Roles Privileged Role Settings"
					],
					"operation": [
						"Privileged Roles Get Settings"
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
						"Privileged Roles Privileged Role Settings"
					],
					"operation": [
						"Privileged Roles Get Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedRoles/{privilegedRole-id}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Roles Privileged Role Settings"
					],
					"operation": [
						"Privileged Roles Update Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedRoles/{privilegedRole-id}/settings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Roles Privileged Role Settings"
					],
					"operation": [
						"Privileged Roles Update Settings"
					]
				}
			}
		},
];
