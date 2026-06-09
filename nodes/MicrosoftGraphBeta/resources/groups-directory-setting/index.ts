import type { INodeProperties } from 'n8n-workflow';

export const groupsDirectorySettingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Directory Setting"
					]
				}
			},
			"options": [
				{
					"name": "Groups List Settings",
					"value": "Groups List Settings",
					"action": "Get settings from groups",
					"description": "Settings that can govern this group's behavior, like whether members can invite guest users to the group. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/settings"
						}
					}
				},
				{
					"name": "Groups Create Settings",
					"value": "Groups Create Settings",
					"action": "Create settings",
					"description": "Create a new setting based on the templates available in directorySettingTemplates. These settings can be at the tenant-level or at the group level. Group settings apply to only Microsoft 365 groups. The template named `Group.Unified` can be used to configure tenant-wide Microsoft 365 group settings, while the template named `Group.Unified.Guest` can be used to configure group-specific settings.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/settings"
						}
					}
				},
				{
					"name": "Groups Delete Settings",
					"value": "Groups Delete Settings",
					"action": "Delete navigation property settings for groups",
					"description": "Delete navigation property settings for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/settings/{{$parameter[\"directorySetting-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Get Settings",
					"value": "Groups Get Settings",
					"action": "Get settings from groups",
					"description": "Settings that can govern this group's behavior, like whether members can invite guest users to the group. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/settings/{{$parameter[\"directorySetting-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Update Settings",
					"value": "Groups Update Settings",
					"action": "Update the navigation property settings in groups",
					"description": "Update the navigation property settings in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/settings/{{$parameter[\"directorySetting-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /groups/{group-id}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Directory Setting"
					],
					"operation": [
						"Groups List Settings"
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
						"Groups Directory Setting"
					],
					"operation": [
						"Groups List Settings"
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
						"Groups Directory Setting"
					],
					"operation": [
						"Groups List Settings"
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
						"Groups Directory Setting"
					],
					"operation": [
						"Groups List Settings"
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
						"Groups Directory Setting"
					],
					"operation": [
						"Groups List Settings"
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
						"Groups Directory Setting"
					],
					"operation": [
						"Groups List Settings"
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
						"Groups Directory Setting"
					],
					"operation": [
						"Groups List Settings"
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
						"Groups Directory Setting"
					],
					"operation": [
						"Groups List Settings"
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
						"Groups Directory Setting"
					],
					"operation": [
						"Groups List Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Directory Setting"
					],
					"operation": [
						"Groups Create Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/settings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Directory Setting"
					],
					"operation": [
						"Groups Create Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/settings/{directorySetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Directory Setting"
					],
					"operation": [
						"Groups Delete Settings"
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
						"Groups Directory Setting"
					],
					"operation": [
						"Groups Delete Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/settings/{directorySetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Directory Setting"
					],
					"operation": [
						"Groups Get Settings"
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
						"Groups Directory Setting"
					],
					"operation": [
						"Groups Get Settings"
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
						"Groups Directory Setting"
					],
					"operation": [
						"Groups Get Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/settings/{directorySetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Directory Setting"
					],
					"operation": [
						"Groups Update Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/settings/{directorySetting-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Directory Setting"
					],
					"operation": [
						"Groups Update Settings"
					]
				}
			}
		},
];
