import type { INodeProperties } from 'n8n-workflow';

export const settingsDirectorySettingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Settings Directory Setting"
					]
				}
			},
			"options": [
				{
					"name": "Settings Directory Setting List Directory Setting",
					"value": "Settings Directory Setting List Directory Setting",
					"action": "List settings",
					"description": "Retrieve a list of tenant-level or group-specific group settings objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/settings"
						}
					}
				},
				{
					"name": "Settings Directory Setting Create Directory Setting",
					"value": "Settings Directory Setting Create Directory Setting",
					"action": "Create settings",
					"description": "Create a new setting based on the templates available in directorySettingTemplates. These settings can be at the tenant-level or at the group level. Group settings apply to only Microsoft 365 groups. The template named `Group.Unified` can be used to configure tenant-wide Microsoft 365 group settings, while the template named `Group.Unified.Guest` can be used to configure group-specific settings.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/settings"
						}
					}
				},
				{
					"name": "Settings Directory Setting Delete Directory Setting",
					"value": "Settings Directory Setting Delete Directory Setting",
					"action": "Delete directorySetting",
					"description": "Delete a directory setting.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/settings/{{$parameter[\"directorySetting-id\"]}}"
						}
					}
				},
				{
					"name": "Settings Directory Setting Get Directory Setting",
					"value": "Settings Directory Setting Get Directory Setting",
					"action": "Get directorySetting",
					"description": "Retrieve the properties of a specific directory setting object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/settings/{{$parameter[\"directorySetting-id\"]}}"
						}
					}
				},
				{
					"name": "Settings Directory Setting Update Directory Setting",
					"value": "Settings Directory Setting Update Directory Setting",
					"action": "Update directorySetting",
					"description": "Update the properties of a specific directory setting object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/settings/{{$parameter[\"directorySetting-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Settings Directory Setting"
					],
					"operation": [
						"Settings Directory Setting List Directory Setting"
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
						"Settings Directory Setting"
					],
					"operation": [
						"Settings Directory Setting List Directory Setting"
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
						"Settings Directory Setting"
					],
					"operation": [
						"Settings Directory Setting List Directory Setting"
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
						"Settings Directory Setting"
					],
					"operation": [
						"Settings Directory Setting List Directory Setting"
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
						"Settings Directory Setting"
					],
					"operation": [
						"Settings Directory Setting List Directory Setting"
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
						"Settings Directory Setting"
					],
					"operation": [
						"Settings Directory Setting List Directory Setting"
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
						"Settings Directory Setting"
					],
					"operation": [
						"Settings Directory Setting List Directory Setting"
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
						"Settings Directory Setting"
					],
					"operation": [
						"Settings Directory Setting List Directory Setting"
					]
				}
			}
		},
		{
			"displayName": "POST /settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Settings Directory Setting"
					],
					"operation": [
						"Settings Directory Setting Create Directory Setting"
					]
				}
			}
		},
		{
			"displayName": "POST /settings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Settings Directory Setting"
					],
					"operation": [
						"Settings Directory Setting Create Directory Setting"
					]
				}
			}
		},
		{
			"displayName": "DELETE /settings/{directorySetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Settings Directory Setting"
					],
					"operation": [
						"Settings Directory Setting Delete Directory Setting"
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
						"Settings Directory Setting"
					],
					"operation": [
						"Settings Directory Setting Delete Directory Setting"
					]
				}
			}
		},
		{
			"displayName": "GET /settings/{directorySetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Settings Directory Setting"
					],
					"operation": [
						"Settings Directory Setting Get Directory Setting"
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
						"Settings Directory Setting"
					],
					"operation": [
						"Settings Directory Setting Get Directory Setting"
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
						"Settings Directory Setting"
					],
					"operation": [
						"Settings Directory Setting Get Directory Setting"
					]
				}
			}
		},
		{
			"displayName": "PATCH /settings/{directorySetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Settings Directory Setting"
					],
					"operation": [
						"Settings Directory Setting Update Directory Setting"
					]
				}
			}
		},
		{
			"displayName": "PATCH /settings/{directorySetting-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Settings Directory Setting"
					],
					"operation": [
						"Settings Directory Setting Update Directory Setting"
					]
				}
			}
		},
];
