import type { INodeProperties } from 'n8n-workflow';

export const teamsTeamsAppInstallationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teams App Installation"
					]
				}
			},
			"options": [
				{
					"name": "Teams List Installed Apps",
					"value": "Teams List Installed Apps",
					"action": "List apps in team",
					"description": "Retrieve the list of apps installed in the specified team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/installedApps"
						}
					}
				},
				{
					"name": "Teams Create Installed Apps",
					"value": "Teams Create Installed Apps",
					"action": "Add app to team",
					"description": "Install an app to the specified team.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/installedApps"
						}
					}
				},
				{
					"name": "Teams Delete Installed Apps",
					"value": "Teams Delete Installed Apps",
					"action": "Delete navigation property installedApps for teams",
					"description": "Delete navigation property installedApps for teams",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Get Installed Apps",
					"value": "Teams Get Installed Apps",
					"action": "Get installedApps from teams",
					"description": "The apps installed in this team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Update Installed Apps",
					"value": "Teams Update Installed Apps",
					"action": "Update the navigation property installedApps in teams",
					"description": "Update the navigation property installedApps in teams",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Installed Apps Get Teams App",
					"value": "Teams Installed Apps Get Teams App",
					"action": "Get teamsApp from teams",
					"description": "The app that is installed.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}/teamsApp"
						}
					}
				},
				{
					"name": "Teams Installed Apps Get Teams App Definition",
					"value": "Teams Installed Apps Get Teams App Definition",
					"action": "Get teamsAppDefinition from teams",
					"description": "The details of this version of the app.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/installedApps/{{$parameter[\"teamsAppInstallation-id\"]}}/teamsAppDefinition"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /teams/{team-id}/installedApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teams App Installation"
					],
					"operation": [
						"Teams List Installed Apps"
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
						"Teams Teams App Installation"
					],
					"operation": [
						"Teams List Installed Apps"
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
						"Teams Teams App Installation"
					],
					"operation": [
						"Teams List Installed Apps"
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
						"Teams Teams App Installation"
					],
					"operation": [
						"Teams List Installed Apps"
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
						"Teams Teams App Installation"
					],
					"operation": [
						"Teams List Installed Apps"
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
						"Teams Teams App Installation"
					],
					"operation": [
						"Teams List Installed Apps"
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
						"Teams Teams App Installation"
					],
					"operation": [
						"Teams List Installed Apps"
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
						"Teams Teams App Installation"
					],
					"operation": [
						"Teams List Installed Apps"
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
						"Teams Teams App Installation"
					],
					"operation": [
						"Teams List Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{team-id}/installedApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teams App Installation"
					],
					"operation": [
						"Teams Create Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{team-id}/installedApps<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teams App Installation"
					],
					"operation": [
						"Teams Create Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teams/{team-id}/installedApps/{teamsAppInstallation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teams App Installation"
					],
					"operation": [
						"Teams Delete Installed Apps"
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
						"Teams Teams App Installation"
					],
					"operation": [
						"Teams Delete Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/installedApps/{teamsAppInstallation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teams App Installation"
					],
					"operation": [
						"Teams Get Installed Apps"
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
						"Teams Teams App Installation"
					],
					"operation": [
						"Teams Get Installed Apps"
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
						"Teams Teams App Installation"
					],
					"operation": [
						"Teams Get Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/installedApps/{teamsAppInstallation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teams App Installation"
					],
					"operation": [
						"Teams Update Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/installedApps/{teamsAppInstallation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teams App Installation"
					],
					"operation": [
						"Teams Update Installed Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsApp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teams App Installation"
					],
					"operation": [
						"Teams Installed Apps Get Teams App"
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
						"Teams Teams App Installation"
					],
					"operation": [
						"Teams Installed Apps Get Teams App"
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
						"Teams Teams App Installation"
					],
					"operation": [
						"Teams Installed Apps Get Teams App"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teams App Installation"
					],
					"operation": [
						"Teams Installed Apps Get Teams App Definition"
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
						"Teams Teams App Installation"
					],
					"operation": [
						"Teams Installed Apps Get Teams App Definition"
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
						"Teams Teams App Installation"
					],
					"operation": [
						"Teams Installed Apps Get Teams App Definition"
					]
				}
			}
		},
];
