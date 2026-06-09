import type { INodeProperties } from 'n8n-workflow';

export const teamworkTeamsAppSettingsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teams App Settings"
					]
				}
			},
			"options": [
				{
					"name": "Teamwork Delete Teams App Settings",
					"value": "Teamwork Delete Teams App Settings",
					"action": "Delete navigation property teamsAppSettings for teamwork",
					"description": "Delete navigation property teamsAppSettings for teamwork",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teamwork/teamsAppSettings"
						}
					}
				},
				{
					"name": "Teamwork Get Teams App Settings",
					"value": "Teamwork Get Teams App Settings",
					"action": "Get teamsAppSettings",
					"description": "Read the properties and relationships of a teamsAppSettings object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork/teamsAppSettings"
						}
					}
				},
				{
					"name": "Teamwork Update Teams App Settings",
					"value": "Teamwork Update Teams App Settings",
					"action": "Update teamsAppSettings",
					"description": "Update the properties of a teamsAppSettings object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamwork/teamsAppSettings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /teamwork/teamsAppSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teams App Settings"
					],
					"operation": [
						"Teamwork Delete Teams App Settings"
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
						"Teamwork Teams App Settings"
					],
					"operation": [
						"Teamwork Delete Teams App Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /teamwork/teamsAppSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teams App Settings"
					],
					"operation": [
						"Teamwork Get Teams App Settings"
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
						"Teamwork Teams App Settings"
					],
					"operation": [
						"Teamwork Get Teams App Settings"
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
						"Teamwork Teams App Settings"
					],
					"operation": [
						"Teamwork Get Teams App Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/teamsAppSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teams App Settings"
					],
					"operation": [
						"Teamwork Update Teams App Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork/teamsAppSettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teams App Settings"
					],
					"operation": [
						"Teamwork Update Teams App Settings"
					]
				}
			}
		},
];
