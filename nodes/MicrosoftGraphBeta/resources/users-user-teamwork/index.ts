import type { INodeProperties } from 'n8n-workflow';

export const usersUserTeamworkDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Teamwork"
					]
				}
			},
			"options": [
				{
					"name": "Users Delete Teamwork",
					"value": "Users Delete Teamwork",
					"action": "Delete navigation property teamwork for users",
					"description": "Delete navigation property teamwork for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/teamwork"
						}
					}
				},
				{
					"name": "Users Get Teamwork",
					"value": "Users Get Teamwork",
					"action": "Get teamwork from users",
					"description": "A container for Microsoft Teams features available for the user. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/teamwork"
						}
					}
				},
				{
					"name": "Users Update Teamwork",
					"value": "Users Update Teamwork",
					"action": "Update the navigation property teamwork in users",
					"description": "Update the navigation property teamwork in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/teamwork"
						}
					}
				},
				{
					"name": "Users Teamwork List Associated Teams",
					"value": "Users Teamwork List Associated Teams",
					"action": "List associatedTeamInfo",
					"description": "Get the list of teams in Microsoft Teams that a user is associated with.\nCurrently, a user can be associated with a team in two different ways:\n* A user can be a direct member of a team.\n* A user can be a member of a shared channel that is hosted inside a team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/teamwork/associatedTeams"
						}
					}
				},
				{
					"name": "Users Teamwork Create Associated Teams",
					"value": "Users Teamwork Create Associated Teams",
					"action": "Create new navigation property to associatedTeams for users",
					"description": "Create new navigation property to associatedTeams for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/teamwork/associatedTeams"
						}
					}
				},
				{
					"name": "Users Teamwork Delete Associated Teams",
					"value": "Users Teamwork Delete Associated Teams",
					"action": "Delete navigation property associatedTeams for users",
					"description": "Delete navigation property associatedTeams for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/teamwork/associatedTeams/{{$parameter[\"associatedTeamInfo-id\"]}}"
						}
					}
				},
				{
					"name": "Users Teamwork Get Associated Teams",
					"value": "Users Teamwork Get Associated Teams",
					"action": "Get associatedTeams from users",
					"description": "The list of associatedTeamInfo objects that a user is associated with.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/teamwork/associatedTeams/{{$parameter[\"associatedTeamInfo-id\"]}}"
						}
					}
				},
				{
					"name": "Users Teamwork Update Associated Teams",
					"value": "Users Teamwork Update Associated Teams",
					"action": "Update the navigation property associatedTeams in users",
					"description": "Update the navigation property associatedTeams in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/teamwork/associatedTeams/{{$parameter[\"associatedTeamInfo-id\"]}}"
						}
					}
				},
				{
					"name": "Users Teamwork List Installed Apps",
					"value": "Users Teamwork List Installed Apps",
					"action": "List apps installed for user",
					"description": "Retrieve the list of apps installed in the personal scope of the specified user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/teamwork/installedApps"
						}
					}
				},
				{
					"name": "Users Teamwork Create Installed Apps",
					"value": "Users Teamwork Create Installed Apps",
					"action": "Install app for user",
					"description": "Install an app in the personal scope of the specified user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/teamwork/installedApps"
						}
					}
				},
				{
					"name": "Users Teamwork Delete Installed Apps",
					"value": "Users Teamwork Delete Installed Apps",
					"action": "Delete navigation property installedApps for users",
					"description": "Delete navigation property installedApps for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/teamwork/installedApps/{{$parameter[\"userScopeTeamsAppInstallation-id\"]}}"
						}
					}
				},
				{
					"name": "Users Teamwork Get Installed Apps",
					"value": "Users Teamwork Get Installed Apps",
					"action": "Get installedApps from users",
					"description": "The apps installed in the personal scope of this user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/teamwork/installedApps/{{$parameter[\"userScopeTeamsAppInstallation-id\"]}}"
						}
					}
				},
				{
					"name": "Users Teamwork Update Installed Apps",
					"value": "Users Teamwork Update Installed Apps",
					"action": "Update the navigation property installedApps in users",
					"description": "Update the navigation property installedApps in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/teamwork/installedApps/{{$parameter[\"userScopeTeamsAppInstallation-id\"]}}"
						}
					}
				},
				{
					"name": "Users Teamwork Installed Apps Get Chat",
					"value": "Users Teamwork Installed Apps Get Chat",
					"action": "Get chat between user and teamsApp",
					"description": "Retrieve the chat of the specified user and Teams app.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/teamwork/installedApps/{{$parameter[\"userScopeTeamsAppInstallation-id\"]}}/chat"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /users/{user-id}/teamwork",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Teamwork"
					],
					"operation": [
						"Users Delete Teamwork"
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
						"Users User Teamwork"
					],
					"operation": [
						"Users Delete Teamwork"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/teamwork",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Teamwork"
					],
					"operation": [
						"Users Get Teamwork"
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
						"Users User Teamwork"
					],
					"operation": [
						"Users Get Teamwork"
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
						"Users User Teamwork"
					],
					"operation": [
						"Users Get Teamwork"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/teamwork",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Teamwork"
					],
					"operation": [
						"Users Update Teamwork"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/teamwork<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Teamwork"
					],
					"operation": [
						"Users Update Teamwork"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/teamwork/associatedTeams",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork List Associated Teams"
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
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork List Associated Teams"
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
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork List Associated Teams"
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
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork List Associated Teams"
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
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork List Associated Teams"
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
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork List Associated Teams"
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
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork List Associated Teams"
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
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork List Associated Teams"
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
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork List Associated Teams"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/teamwork/associatedTeams",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork Create Associated Teams"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/teamwork/associatedTeams<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork Create Associated Teams"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork Delete Associated Teams"
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
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork Delete Associated Teams"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork Get Associated Teams"
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
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork Get Associated Teams"
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
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork Get Associated Teams"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork Update Associated Teams"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/teamwork/associatedTeams/{associatedTeamInfo-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork Update Associated Teams"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/teamwork/installedApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork List Installed Apps"
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
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork List Installed Apps"
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
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork List Installed Apps"
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
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork List Installed Apps"
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
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork List Installed Apps"
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
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork List Installed Apps"
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
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork List Installed Apps"
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
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork List Installed Apps"
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
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork List Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/teamwork/installedApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork Create Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/teamwork/installedApps<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork Create Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork Delete Installed Apps"
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
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork Delete Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork Get Installed Apps"
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
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork Get Installed Apps"
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
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork Get Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork Update Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork Update Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/chat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork Installed Apps Get Chat"
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
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork Installed Apps Get Chat"
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
						"Users User Teamwork"
					],
					"operation": [
						"Users Teamwork Installed Apps Get Chat"
					]
				}
			}
		},
];
