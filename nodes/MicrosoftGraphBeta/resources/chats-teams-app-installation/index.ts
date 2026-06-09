import type { INodeProperties } from 'n8n-workflow';

export const chatsTeamsAppInstallationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Teams App Installation"
					]
				}
			},
			"options": [
				{
					"name": "Chats List Installed Apps",
					"value": "Chats List Installed Apps",
					"action": "List apps in chat",
					"description": "List all app installations within a chat.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/installedApps"
						}
					}
				},
				{
					"name": "Chats Create Installed Apps",
					"value": "Chats Create Installed Apps",
					"action": "Add app to chat",
					"description": "Install a teamsApp to the specified chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/installedApps"
						}
					}
				},
				{
					"name": "Chats Delete Installed Apps",
					"value": "Chats Delete Installed Apps",
					"action": "Delete navigation property installedApps for chats",
					"description": "Delete navigation property installedApps for chats",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}"
						}
					}
				},
				{
					"name": "Chats Get Installed Apps",
					"value": "Chats Get Installed Apps",
					"action": "Get installedApps from chats",
					"description": "A collection of all the apps in the chat. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}"
						}
					}
				},
				{
					"name": "Chats Update Installed Apps",
					"value": "Chats Update Installed Apps",
					"action": "Update the navigation property installedApps in chats",
					"description": "Update the navigation property installedApps in chats",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}"
						}
					}
				},
				{
					"name": "Chats Installed Apps Get Teams App",
					"value": "Chats Installed Apps Get Teams App",
					"action": "Get teamsApp from chats",
					"description": "The app that is installed.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}/teamsApp"
						}
					}
				},
				{
					"name": "Chats Installed Apps Get Teams App Definition",
					"value": "Chats Installed Apps Get Teams App Definition",
					"action": "Get teamsAppDefinition from chats",
					"description": "The details of this version of the app.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}/teamsAppDefinition"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /chats/{chat-id}/installedApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Teams App Installation"
					],
					"operation": [
						"Chats List Installed Apps"
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
						"Chats Teams App Installation"
					],
					"operation": [
						"Chats List Installed Apps"
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
						"Chats Teams App Installation"
					],
					"operation": [
						"Chats List Installed Apps"
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
						"Chats Teams App Installation"
					],
					"operation": [
						"Chats List Installed Apps"
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
						"Chats Teams App Installation"
					],
					"operation": [
						"Chats List Installed Apps"
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
						"Chats Teams App Installation"
					],
					"operation": [
						"Chats List Installed Apps"
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
						"Chats Teams App Installation"
					],
					"operation": [
						"Chats List Installed Apps"
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
						"Chats Teams App Installation"
					],
					"operation": [
						"Chats List Installed Apps"
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
						"Chats Teams App Installation"
					],
					"operation": [
						"Chats List Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/installedApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Teams App Installation"
					],
					"operation": [
						"Chats Create Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/installedApps<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Teams App Installation"
					],
					"operation": [
						"Chats Create Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "DELETE /chats/{chat-id}/installedApps/{teamsAppInstallation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Teams App Installation"
					],
					"operation": [
						"Chats Delete Installed Apps"
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
						"Chats Teams App Installation"
					],
					"operation": [
						"Chats Delete Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /chats/{chat-id}/installedApps/{teamsAppInstallation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Teams App Installation"
					],
					"operation": [
						"Chats Get Installed Apps"
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
						"Chats Teams App Installation"
					],
					"operation": [
						"Chats Get Installed Apps"
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
						"Chats Teams App Installation"
					],
					"operation": [
						"Chats Get Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /chats/{chat-id}/installedApps/{teamsAppInstallation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Teams App Installation"
					],
					"operation": [
						"Chats Update Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /chats/{chat-id}/installedApps/{teamsAppInstallation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Teams App Installation"
					],
					"operation": [
						"Chats Update Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Teams App Installation"
					],
					"operation": [
						"Chats Installed Apps Get Teams App"
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
						"Chats Teams App Installation"
					],
					"operation": [
						"Chats Installed Apps Get Teams App"
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
						"Chats Teams App Installation"
					],
					"operation": [
						"Chats Installed Apps Get Teams App"
					]
				}
			}
		},
		{
			"displayName": "GET /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Teams App Installation"
					],
					"operation": [
						"Chats Installed Apps Get Teams App Definition"
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
						"Chats Teams App Installation"
					],
					"operation": [
						"Chats Installed Apps Get Teams App Definition"
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
						"Chats Teams App Installation"
					],
					"operation": [
						"Chats Installed Apps Get Teams App Definition"
					]
				}
			}
		},
];
