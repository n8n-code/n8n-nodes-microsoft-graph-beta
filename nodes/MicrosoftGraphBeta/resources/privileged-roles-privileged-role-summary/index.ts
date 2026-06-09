import type { INodeProperties } from 'n8n-workflow';

export const privilegedRolesPrivilegedRoleSummaryDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Roles Privileged Role Summary"
					]
				}
			},
			"options": [
				{
					"name": "Privileged Roles Delete Summary",
					"value": "Privileged Roles Delete Summary",
					"action": "Delete navigation property summary for privilegedRoles",
					"description": "Delete navigation property summary for privilegedRoles",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/privilegedRoles/{{$parameter[\"privilegedRole-id\"]}}/summary"
						}
					}
				},
				{
					"name": "Privileged Roles Get Summary",
					"value": "Privileged Roles Get Summary",
					"action": "Get privilegedRoleSummary",
					"description": "Retrieve the properties and relationships of privilegedRoleSummary object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedRoles/{{$parameter[\"privilegedRole-id\"]}}/summary"
						}
					}
				},
				{
					"name": "Privileged Roles Update Summary",
					"value": "Privileged Roles Update Summary",
					"action": "Update the navigation property summary in privilegedRoles",
					"description": "Update the navigation property summary in privilegedRoles",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/privilegedRoles/{{$parameter[\"privilegedRole-id\"]}}/summary"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /privilegedRoles/{privilegedRole-id}/summary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Roles Privileged Role Summary"
					],
					"operation": [
						"Privileged Roles Delete Summary"
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
						"Privileged Roles Privileged Role Summary"
					],
					"operation": [
						"Privileged Roles Delete Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedRoles/{privilegedRole-id}/summary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Roles Privileged Role Summary"
					],
					"operation": [
						"Privileged Roles Get Summary"
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
						"Privileged Roles Privileged Role Summary"
					],
					"operation": [
						"Privileged Roles Get Summary"
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
						"Privileged Roles Privileged Role Summary"
					],
					"operation": [
						"Privileged Roles Get Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedRoles/{privilegedRole-id}/summary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Roles Privileged Role Summary"
					],
					"operation": [
						"Privileged Roles Update Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedRoles/{privilegedRole-id}/summary<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Roles Privileged Role Summary"
					],
					"operation": [
						"Privileged Roles Update Summary"
					]
				}
			}
		},
];
