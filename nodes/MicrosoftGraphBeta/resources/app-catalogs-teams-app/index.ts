import type { INodeProperties } from 'n8n-workflow';

export const appCatalogsTeamsAppDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					]
				}
			},
			"options": [
				{
					"name": "App Catalogs List Teams Apps",
					"value": "App Catalogs List Teams Apps",
					"action": "List teamsApp",
					"description": "List apps from the Microsoft Teams app catalog.\nThis includes apps from the Microsoft Teams store, as well as apps from your organization's app catalog (the tenant app catalog). To get apps from your organization's app catalog only, specify `organization` as the **distributionMethod** in the request.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/appCatalogs/teamsApps"
						}
					}
				},
				{
					"name": "App Catalogs Create Teams Apps",
					"value": "App Catalogs Create Teams Apps",
					"action": "Publish teamsApp",
					"description": "Publish an app to the Microsoft Teams app catalog.\nSpecifically, this API publishes the app to your organization's catalog (the tenant app catalog);\nthe created resource will have a **distributionMethod** property value of `organization`. The **requiresReview** property allows any user to submit an app for review by an administrator. Admins can approve or reject these apps via this API or the Microsoft Teams admin center.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/appCatalogs/teamsApps"
						}
					}
				},
				{
					"name": "App Catalogs Delete Teams Apps",
					"value": "App Catalogs Delete Teams Apps",
					"action": "Delete navigation property teamsApps for appCatalogs",
					"description": "Delete navigation property teamsApps for appCatalogs",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/appCatalogs/teamsApps/{{$parameter[\"teamsApp-id\"]}}"
						}
					}
				},
				{
					"name": "App Catalogs Get Teams Apps",
					"value": "App Catalogs Get Teams Apps",
					"action": "Get teamsApps from appCatalogs",
					"description": "Get teamsApps from appCatalogs",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/appCatalogs/teamsApps/{{$parameter[\"teamsApp-id\"]}}"
						}
					}
				},
				{
					"name": "App Catalogs Update Teams Apps",
					"value": "App Catalogs Update Teams Apps",
					"action": "Update the navigation property teamsApps in appCatalogs",
					"description": "Update the navigation property teamsApps in appCatalogs",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/appCatalogs/teamsApps/{{$parameter[\"teamsApp-id\"]}}"
						}
					}
				},
				{
					"name": "App Catalogs Teams Apps List App Definitions",
					"value": "App Catalogs Teams Apps List App Definitions",
					"action": "Get appDefinitions from appCatalogs",
					"description": "The details for each version of the app.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/appCatalogs/teamsApps/{{$parameter[\"teamsApp-id\"]}}/appDefinitions"
						}
					}
				},
				{
					"name": "App Catalogs Teams Apps Create App Definitions",
					"value": "App Catalogs Teams Apps Create App Definitions",
					"action": "Update teamsApp",
					"description": "Update an app previously published to the Microsoft Teams app catalog. To update an app, the **distributionMethod** property for the app must be set to `organization`. This API specifically updates an app published to your organization's app catalog (the tenant app catalog).  ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/appCatalogs/teamsApps/{{$parameter[\"teamsApp-id\"]}}/appDefinitions"
						}
					}
				},
				{
					"name": "App Catalogs Teams Apps Delete App Definitions",
					"value": "App Catalogs Teams Apps Delete App Definitions",
					"action": "Delete navigation property appDefinitions for appCatalogs",
					"description": "Delete navigation property appDefinitions for appCatalogs",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/appCatalogs/teamsApps/{{$parameter[\"teamsApp-id\"]}}/appDefinitions/{{$parameter[\"teamsAppDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "App Catalogs Teams Apps Get App Definitions",
					"value": "App Catalogs Teams Apps Get App Definitions",
					"action": "Get appDefinitions from appCatalogs",
					"description": "The details for each version of the app.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/appCatalogs/teamsApps/{{$parameter[\"teamsApp-id\"]}}/appDefinitions/{{$parameter[\"teamsAppDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "App Catalogs Teams Apps Update App Definitions",
					"value": "App Catalogs Teams Apps Update App Definitions",
					"action": "Update the navigation property appDefinitions in appCatalogs",
					"description": "Update the navigation property appDefinitions in appCatalogs",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/appCatalogs/teamsApps/{{$parameter[\"teamsApp-id\"]}}/appDefinitions/{{$parameter[\"teamsAppDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "App Catalogs Teams Apps App Definitions Delete Bot",
					"value": "App Catalogs Teams Apps App Definitions Delete Bot",
					"action": "Delete navigation property bot for appCatalogs",
					"description": "Delete navigation property bot for appCatalogs",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/appCatalogs/teamsApps/{{$parameter[\"teamsApp-id\"]}}/appDefinitions/{{$parameter[\"teamsAppDefinition-id\"]}}/bot"
						}
					}
				},
				{
					"name": "App Catalogs Teams Apps App Definitions Get Bot",
					"value": "App Catalogs Teams Apps App Definitions Get Bot",
					"action": "Get teamworkBot",
					"description": "Get the bot associated with a specific definition of the  TeamsApp.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/appCatalogs/teamsApps/{{$parameter[\"teamsApp-id\"]}}/appDefinitions/{{$parameter[\"teamsAppDefinition-id\"]}}/bot"
						}
					}
				},
				{
					"name": "App Catalogs Teams Apps App Definitions Update Bot",
					"value": "App Catalogs Teams Apps App Definitions Update Bot",
					"action": "Update the navigation property bot in appCatalogs",
					"description": "Update the navigation property bot in appCatalogs",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/appCatalogs/teamsApps/{{$parameter[\"teamsApp-id\"]}}/appDefinitions/{{$parameter[\"teamsAppDefinition-id\"]}}/bot"
						}
					}
				},
				{
					"name": "App Catalogs Teams Apps App Definitions Delete Color Icon",
					"value": "App Catalogs Teams Apps App Definitions Delete Color Icon",
					"action": "Delete navigation property colorIcon for appCatalogs",
					"description": "Delete navigation property colorIcon for appCatalogs",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/appCatalogs/teamsApps/{{$parameter[\"teamsApp-id\"]}}/appDefinitions/{{$parameter[\"teamsAppDefinition-id\"]}}/colorIcon"
						}
					}
				},
				{
					"name": "App Catalogs Teams Apps App Definitions Get Color Icon",
					"value": "App Catalogs Teams Apps App Definitions Get Color Icon",
					"action": "Get teamsAppIcon",
					"description": "Retrieve a Teams app icon associated with a specific definition of an app.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/appCatalogs/teamsApps/{{$parameter[\"teamsApp-id\"]}}/appDefinitions/{{$parameter[\"teamsAppDefinition-id\"]}}/colorIcon"
						}
					}
				},
				{
					"name": "App Catalogs Teams Apps App Definitions Update Color Icon",
					"value": "App Catalogs Teams Apps App Definitions Update Color Icon",
					"action": "Update the navigation property colorIcon in appCatalogs",
					"description": "Update the navigation property colorIcon in appCatalogs",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/appCatalogs/teamsApps/{{$parameter[\"teamsApp-id\"]}}/appDefinitions/{{$parameter[\"teamsAppDefinition-id\"]}}/colorIcon"
						}
					}
				},
				{
					"name": "App Catalogs Teams Apps App Definitions Color Icon Delete Hosted Content",
					"value": "App Catalogs Teams Apps App Definitions Color Icon Delete Hosted Content",
					"action": "Delete navigation property hostedContent for appCatalogs",
					"description": "Delete navigation property hostedContent for appCatalogs",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/appCatalogs/teamsApps/{{$parameter[\"teamsApp-id\"]}}/appDefinitions/{{$parameter[\"teamsAppDefinition-id\"]}}/colorIcon/hostedContent"
						}
					}
				},
				{
					"name": "App Catalogs Teams Apps App Definitions Color Icon Get Hosted Content",
					"value": "App Catalogs Teams Apps App Definitions Color Icon Get Hosted Content",
					"action": "Get teamworkHostedContent",
					"description": "Retrieve the hosted content in an app's icon.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/appCatalogs/teamsApps/{{$parameter[\"teamsApp-id\"]}}/appDefinitions/{{$parameter[\"teamsAppDefinition-id\"]}}/colorIcon/hostedContent"
						}
					}
				},
				{
					"name": "App Catalogs Teams Apps App Definitions Color Icon Update Hosted Content",
					"value": "App Catalogs Teams Apps App Definitions Color Icon Update Hosted Content",
					"action": "Update the navigation property hostedContent in appCatalogs",
					"description": "Update the navigation property hostedContent in appCatalogs",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/appCatalogs/teamsApps/{{$parameter[\"teamsApp-id\"]}}/appDefinitions/{{$parameter[\"teamsAppDefinition-id\"]}}/colorIcon/hostedContent"
						}
					}
				},
				{
					"name": "App Catalogs Teams Apps App Definitions Color Icon Get Hosted Content Content",
					"value": "App Catalogs Teams Apps App Definitions Color Icon Get Hosted Content Content",
					"action": "Get media content for the navigation property hostedContent from appCatalogs",
					"description": "Get media content for the navigation property hostedContent from appCatalogs",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/appCatalogs/teamsApps/{{$parameter[\"teamsApp-id\"]}}/appDefinitions/{{$parameter[\"teamsAppDefinition-id\"]}}/colorIcon/hostedContent/$value"
						}
					}
				},
				{
					"name": "App Catalogs Teams Apps App Definitions Color Icon Update Hosted Content Content",
					"value": "App Catalogs Teams Apps App Definitions Color Icon Update Hosted Content Content",
					"action": "Update media content for the navigation property hostedContent in appCatalogs",
					"description": "Update media content for the navigation property hostedContent in appCatalogs",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/appCatalogs/teamsApps/{{$parameter[\"teamsApp-id\"]}}/appDefinitions/{{$parameter[\"teamsAppDefinition-id\"]}}/colorIcon/hostedContent/$value"
						}
					}
				},
				{
					"name": "App Catalogs Teams Apps App Definitions Delete Outline Icon",
					"value": "App Catalogs Teams Apps App Definitions Delete Outline Icon",
					"action": "Delete navigation property outlineIcon for appCatalogs",
					"description": "Delete navigation property outlineIcon for appCatalogs",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/appCatalogs/teamsApps/{{$parameter[\"teamsApp-id\"]}}/appDefinitions/{{$parameter[\"teamsAppDefinition-id\"]}}/outlineIcon"
						}
					}
				},
				{
					"name": "App Catalogs Teams Apps App Definitions Get Outline Icon",
					"value": "App Catalogs Teams Apps App Definitions Get Outline Icon",
					"action": "Get teamsAppIcon",
					"description": "Retrieve a Teams app icon associated with a specific definition of an app.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/appCatalogs/teamsApps/{{$parameter[\"teamsApp-id\"]}}/appDefinitions/{{$parameter[\"teamsAppDefinition-id\"]}}/outlineIcon"
						}
					}
				},
				{
					"name": "App Catalogs Teams Apps App Definitions Update Outline Icon",
					"value": "App Catalogs Teams Apps App Definitions Update Outline Icon",
					"action": "Update the navigation property outlineIcon in appCatalogs",
					"description": "Update the navigation property outlineIcon in appCatalogs",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/appCatalogs/teamsApps/{{$parameter[\"teamsApp-id\"]}}/appDefinitions/{{$parameter[\"teamsAppDefinition-id\"]}}/outlineIcon"
						}
					}
				},
				{
					"name": "App Catalogs Teams Apps App Definitions Outline Icon Delete Hosted Content",
					"value": "App Catalogs Teams Apps App Definitions Outline Icon Delete Hosted Content",
					"action": "Delete navigation property hostedContent for appCatalogs",
					"description": "Delete navigation property hostedContent for appCatalogs",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/appCatalogs/teamsApps/{{$parameter[\"teamsApp-id\"]}}/appDefinitions/{{$parameter[\"teamsAppDefinition-id\"]}}/outlineIcon/hostedContent"
						}
					}
				},
				{
					"name": "App Catalogs Teams Apps App Definitions Outline Icon Get Hosted Content",
					"value": "App Catalogs Teams Apps App Definitions Outline Icon Get Hosted Content",
					"action": "Get teamworkHostedContent",
					"description": "Retrieve the hosted content in an app's icon.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/appCatalogs/teamsApps/{{$parameter[\"teamsApp-id\"]}}/appDefinitions/{{$parameter[\"teamsAppDefinition-id\"]}}/outlineIcon/hostedContent"
						}
					}
				},
				{
					"name": "App Catalogs Teams Apps App Definitions Outline Icon Update Hosted Content",
					"value": "App Catalogs Teams Apps App Definitions Outline Icon Update Hosted Content",
					"action": "Update the navigation property hostedContent in appCatalogs",
					"description": "Update the navigation property hostedContent in appCatalogs",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/appCatalogs/teamsApps/{{$parameter[\"teamsApp-id\"]}}/appDefinitions/{{$parameter[\"teamsAppDefinition-id\"]}}/outlineIcon/hostedContent"
						}
					}
				},
				{
					"name": "App Catalogs Teams Apps App Definitions Outline Icon Get Hosted Content Content",
					"value": "App Catalogs Teams Apps App Definitions Outline Icon Get Hosted Content Content",
					"action": "Get media content for the navigation property hostedContent from appCatalogs",
					"description": "Get media content for the navigation property hostedContent from appCatalogs",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/appCatalogs/teamsApps/{{$parameter[\"teamsApp-id\"]}}/appDefinitions/{{$parameter[\"teamsAppDefinition-id\"]}}/outlineIcon/hostedContent/$value"
						}
					}
				},
				{
					"name": "App Catalogs Teams Apps App Definitions Outline Icon Update Hosted Content Content",
					"value": "App Catalogs Teams Apps App Definitions Outline Icon Update Hosted Content Content",
					"action": "Update media content for the navigation property hostedContent in appCatalogs",
					"description": "Update media content for the navigation property hostedContent in appCatalogs",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/appCatalogs/teamsApps/{{$parameter[\"teamsApp-id\"]}}/appDefinitions/{{$parameter[\"teamsAppDefinition-id\"]}}/outlineIcon/hostedContent/$value"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /appCatalogs/teamsApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs List Teams Apps"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs List Teams Apps"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs List Teams Apps"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs List Teams Apps"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs List Teams Apps"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs List Teams Apps"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs List Teams Apps"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs List Teams Apps"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs List Teams Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /appCatalogs/teamsApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Create Teams Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /appCatalogs/teamsApps<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Create Teams Apps"
					]
				}
			}
		},
		{
			"displayName": "DELETE /appCatalogs/teamsApps/{teamsApp-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Delete Teams Apps"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Delete Teams Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /appCatalogs/teamsApps/{teamsApp-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Get Teams Apps"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Get Teams Apps"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Get Teams Apps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /appCatalogs/teamsApps/{teamsApp-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Update Teams Apps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /appCatalogs/teamsApps/{teamsApp-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Update Teams Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps List App Definitions"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps List App Definitions"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps List App Definitions"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps List App Definitions"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps List App Definitions"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps List App Definitions"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps List App Definitions"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps List App Definitions"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps List App Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps Create App Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps Create App Definitions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps Delete App Definitions"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps Delete App Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps Get App Definitions"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps Get App Definitions"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps Get App Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps Update App Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps Update App Definitions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Delete Bot"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Delete Bot"
					]
				}
			}
		},
		{
			"displayName": "GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Get Bot"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Get Bot"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Get Bot"
					]
				}
			}
		},
		{
			"displayName": "PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Update Bot"
					]
				}
			}
		},
		{
			"displayName": "PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Update Bot"
					]
				}
			}
		},
		{
			"displayName": "DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Delete Color Icon"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Delete Color Icon"
					]
				}
			}
		},
		{
			"displayName": "GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Get Color Icon"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Get Color Icon"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Get Color Icon"
					]
				}
			}
		},
		{
			"displayName": "PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Update Color Icon"
					]
				}
			}
		},
		{
			"displayName": "PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Update Color Icon"
					]
				}
			}
		},
		{
			"displayName": "DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon/hostedContent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Color Icon Delete Hosted Content"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Color Icon Delete Hosted Content"
					]
				}
			}
		},
		{
			"displayName": "GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon/hostedContent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Color Icon Get Hosted Content"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Color Icon Get Hosted Content"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Color Icon Get Hosted Content"
					]
				}
			}
		},
		{
			"displayName": "PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon/hostedContent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Color Icon Update Hosted Content"
					]
				}
			}
		},
		{
			"displayName": "PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon/hostedContent<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Color Icon Update Hosted Content"
					]
				}
			}
		},
		{
			"displayName": "GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon/hostedContent/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Color Icon Get Hosted Content Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon/hostedContent/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Color Icon Update Hosted Content Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon/hostedContent/$value<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Color Icon Update Hosted Content Content"
					]
				}
			}
		},
		{
			"displayName": "DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Delete Outline Icon"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Delete Outline Icon"
					]
				}
			}
		},
		{
			"displayName": "GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Get Outline Icon"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Get Outline Icon"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Get Outline Icon"
					]
				}
			}
		},
		{
			"displayName": "PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Update Outline Icon"
					]
				}
			}
		},
		{
			"displayName": "PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Update Outline Icon"
					]
				}
			}
		},
		{
			"displayName": "DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon/hostedContent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Outline Icon Delete Hosted Content"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Outline Icon Delete Hosted Content"
					]
				}
			}
		},
		{
			"displayName": "GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon/hostedContent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Outline Icon Get Hosted Content"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Outline Icon Get Hosted Content"
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
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Outline Icon Get Hosted Content"
					]
				}
			}
		},
		{
			"displayName": "PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon/hostedContent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Outline Icon Update Hosted Content"
					]
				}
			}
		},
		{
			"displayName": "PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon/hostedContent<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Outline Icon Update Hosted Content"
					]
				}
			}
		},
		{
			"displayName": "GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon/hostedContent/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Outline Icon Get Hosted Content Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon/hostedContent/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Outline Icon Update Hosted Content Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon/hostedContent/$value<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Catalogs Teams App"
					],
					"operation": [
						"App Catalogs Teams Apps App Definitions Outline Icon Update Hosted Content Content"
					]
				}
			}
		},
];
