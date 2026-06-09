import type { INodeProperties } from 'n8n-workflow';

export const meUserTeamworkDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Teamwork"
					]
				}
			},
			"options": [
				{
					"name": "Me Delete Teamwork",
					"value": "Me Delete Teamwork",
					"action": "Delete navigation property teamwork for me",
					"description": "Delete navigation property teamwork for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/teamwork"
						}
					}
				},
				{
					"name": "Me Get Teamwork",
					"value": "Me Get Teamwork",
					"action": "Get teamwork from me",
					"description": "A container for Microsoft Teams features available for the user. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/teamwork"
						}
					}
				},
				{
					"name": "Me Update Teamwork",
					"value": "Me Update Teamwork",
					"action": "Update the navigation property teamwork in me",
					"description": "Update the navigation property teamwork in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/teamwork"
						}
					}
				},
				{
					"name": "Me Teamwork List Associated Teams",
					"value": "Me Teamwork List Associated Teams",
					"action": "List associatedTeamInfo",
					"description": "Get the list of teams in Microsoft Teams that a user is associated with.\nCurrently, a user can be associated with a team in two different ways:\n* A user can be a direct member of a team.\n* A user can be a member of a shared channel that is hosted inside a team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/teamwork/associatedTeams"
						}
					}
				},
				{
					"name": "Me Teamwork Create Associated Teams",
					"value": "Me Teamwork Create Associated Teams",
					"action": "Create new navigation property to associatedTeams for me",
					"description": "Create new navigation property to associatedTeams for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/teamwork/associatedTeams"
						}
					}
				},
				{
					"name": "Me Teamwork Delete Associated Teams",
					"value": "Me Teamwork Delete Associated Teams",
					"action": "Delete navigation property associatedTeams for me",
					"description": "Delete navigation property associatedTeams for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/teamwork/associatedTeams/{{$parameter[\"associatedTeamInfo-id\"]}}"
						}
					}
				},
				{
					"name": "Me Teamwork Get Associated Teams",
					"value": "Me Teamwork Get Associated Teams",
					"action": "Get associatedTeams from me",
					"description": "The list of associatedTeamInfo objects that a user is associated with.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/teamwork/associatedTeams/{{$parameter[\"associatedTeamInfo-id\"]}}"
						}
					}
				},
				{
					"name": "Me Teamwork Update Associated Teams",
					"value": "Me Teamwork Update Associated Teams",
					"action": "Update the navigation property associatedTeams in me",
					"description": "Update the navigation property associatedTeams in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/teamwork/associatedTeams/{{$parameter[\"associatedTeamInfo-id\"]}}"
						}
					}
				},
				{
					"name": "Me Teamwork List Installed Apps",
					"value": "Me Teamwork List Installed Apps",
					"action": "List apps installed for user",
					"description": "Retrieve the list of apps installed in the personal scope of the specified user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/teamwork/installedApps"
						}
					}
				},
				{
					"name": "Me Teamwork Create Installed Apps",
					"value": "Me Teamwork Create Installed Apps",
					"action": "Install app for user",
					"description": "Install an app in the personal scope of the specified user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/teamwork/installedApps"
						}
					}
				},
				{
					"name": "Me Teamwork Delete Installed Apps",
					"value": "Me Teamwork Delete Installed Apps",
					"action": "Delete navigation property installedApps for me",
					"description": "Delete navigation property installedApps for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/teamwork/installedApps/{{$parameter[\"userScopeTeamsAppInstallation-id\"]}}"
						}
					}
				},
				{
					"name": "Me Teamwork Get Installed Apps",
					"value": "Me Teamwork Get Installed Apps",
					"action": "Get installedApps from me",
					"description": "The apps installed in the personal scope of this user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/teamwork/installedApps/{{$parameter[\"userScopeTeamsAppInstallation-id\"]}}"
						}
					}
				},
				{
					"name": "Me Teamwork Update Installed Apps",
					"value": "Me Teamwork Update Installed Apps",
					"action": "Update the navigation property installedApps in me",
					"description": "Update the navigation property installedApps in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/teamwork/installedApps/{{$parameter[\"userScopeTeamsAppInstallation-id\"]}}"
						}
					}
				},
				{
					"name": "Me Teamwork Installed Apps Get Chat",
					"value": "Me Teamwork Installed Apps Get Chat",
					"action": "Get chat between user and teamsApp",
					"description": "Retrieve the chat of the specified user and Teams app.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/teamwork/installedApps/{{$parameter[\"userScopeTeamsAppInstallation-id\"]}}/chat"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /me/teamwork",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Teamwork"
					],
					"operation": [
						"Me Delete Teamwork"
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
						"Me User Teamwork"
					],
					"operation": [
						"Me Delete Teamwork"
					]
				}
			}
		},
		{
			"displayName": "GET /me/teamwork",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Teamwork"
					],
					"operation": [
						"Me Get Teamwork"
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
						"Me User Teamwork"
					],
					"operation": [
						"Me Get Teamwork"
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
						"Me User Teamwork"
					],
					"operation": [
						"Me Get Teamwork"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/teamwork",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Teamwork"
					],
					"operation": [
						"Me Update Teamwork"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/teamwork<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Teamwork"
					],
					"operation": [
						"Me Update Teamwork"
					]
				}
			}
		},
		{
			"displayName": "GET /me/teamwork/associatedTeams",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork List Associated Teams"
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
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork List Associated Teams"
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
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork List Associated Teams"
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
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork List Associated Teams"
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
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork List Associated Teams"
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
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork List Associated Teams"
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
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork List Associated Teams"
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
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork List Associated Teams"
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
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork List Associated Teams"
					]
				}
			}
		},
		{
			"displayName": "POST /me/teamwork/associatedTeams",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork Create Associated Teams"
					]
				}
			}
		},
		{
			"displayName": "POST /me/teamwork/associatedTeams<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork Create Associated Teams"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/teamwork/associatedTeams/{associatedTeamInfo-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork Delete Associated Teams"
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
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork Delete Associated Teams"
					]
				}
			}
		},
		{
			"displayName": "GET /me/teamwork/associatedTeams/{associatedTeamInfo-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork Get Associated Teams"
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
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork Get Associated Teams"
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
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork Get Associated Teams"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/teamwork/associatedTeams/{associatedTeamInfo-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork Update Associated Teams"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/teamwork/associatedTeams/{associatedTeamInfo-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork Update Associated Teams"
					]
				}
			}
		},
		{
			"displayName": "GET /me/teamwork/installedApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork List Installed Apps"
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
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork List Installed Apps"
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
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork List Installed Apps"
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
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork List Installed Apps"
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
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork List Installed Apps"
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
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork List Installed Apps"
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
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork List Installed Apps"
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
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork List Installed Apps"
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
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork List Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /me/teamwork/installedApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork Create Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /me/teamwork/installedApps<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork Create Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork Delete Installed Apps"
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
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork Delete Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork Get Installed Apps"
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
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork Get Installed Apps"
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
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork Get Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork Update Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork Update Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/chat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork Installed Apps Get Chat"
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
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork Installed Apps Get Chat"
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
						"Me User Teamwork"
					],
					"operation": [
						"Me Teamwork Installed Apps Get Chat"
					]
				}
			}
		},
];
