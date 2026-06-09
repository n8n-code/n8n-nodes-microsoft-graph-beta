import type { INodeProperties } from 'n8n-workflow';

export const onPremisesPublishingProfilesConnectorGroupDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector Group"
					]
				}
			},
			"options": [
				{
					"name": "On Premises Publishing Profiles List Connector Groups",
					"value": "On Premises Publishing Profiles List Connector Groups",
					"action": "List connectorGroups",
					"description": "Retrieve a list of connectorGroup objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/connectorGroups"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles Create Connector Groups",
					"value": "On Premises Publishing Profiles Create Connector Groups",
					"action": "Create connectorGroup",
					"description": "Create a new connectorGroup.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/connectorGroups"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles Delete Connector Groups",
					"value": "On Premises Publishing Profiles Delete Connector Groups",
					"action": "Delete navigation property connectorGroups for onPremisesPublishingProfiles",
					"description": "Delete navigation property connectorGroups for onPremisesPublishingProfiles",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/connectorGroups/{{$parameter[\"connectorGroup-id\"]}}"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles Get Connector Groups",
					"value": "On Premises Publishing Profiles Get Connector Groups",
					"action": "Get connectorGroups from onPremisesPublishingProfiles",
					"description": "List of existing connectorGroup objects for applications published through Application Proxy. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/connectorGroups/{{$parameter[\"connectorGroup-id\"]}}"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles Update Connector Groups",
					"value": "On Premises Publishing Profiles Update Connector Groups",
					"action": "Update the navigation property connectorGroups in onPremisesPublishingProfiles",
					"description": "Update the navigation property connectorGroups in onPremisesPublishingProfiles",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/connectorGroups/{{$parameter[\"connectorGroup-id\"]}}"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles Connector Groups List Applications",
					"value": "On Premises Publishing Profiles Connector Groups List Applications",
					"action": "Get applications from onPremisesPublishingProfiles",
					"description": "Get applications from onPremisesPublishingProfiles",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/connectorGroups/{{$parameter[\"connectorGroup-id\"]}}/applications"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles Connector Groups Get Applications",
					"value": "On Premises Publishing Profiles Connector Groups Get Applications",
					"action": "Get applications from onPremisesPublishingProfiles",
					"description": "Get applications from onPremisesPublishingProfiles",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/connectorGroups/{{$parameter[\"connectorGroup-id\"]}}/applications/{{$parameter[\"application-id\"]}}"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles Connector Groups Get Applications Logo",
					"value": "On Premises Publishing Profiles Connector Groups Get Applications Logo",
					"action": "Get logo for the navigation property applications from onPremisesPublishingProfiles",
					"description": "The main logo for the application. Not nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/connectorGroups/{{$parameter[\"connectorGroup-id\"]}}/applications/{{$parameter[\"application-id\"]}}/logo"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles Connector Groups Update Applications Logo",
					"value": "On Premises Publishing Profiles Connector Groups Update Applications Logo",
					"action": "Update logo for the navigation property applications in onPremisesPublishingProfiles",
					"description": "The main logo for the application. Not nullable.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/connectorGroups/{{$parameter[\"connectorGroup-id\"]}}/applications/{{$parameter[\"application-id\"]}}/logo"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles Connector Groups List Members",
					"value": "On Premises Publishing Profiles Connector Groups List Members",
					"action": "Get members from onPremisesPublishingProfiles",
					"description": "Get members from onPremisesPublishingProfiles",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/connectorGroups/{{$parameter[\"connectorGroup-id\"]}}/members"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles Connector Groups List Ref Members",
					"value": "On Premises Publishing Profiles Connector Groups List Ref Members",
					"action": "Get ref of members from onPremisesPublishingProfiles",
					"description": "Get ref of members from onPremisesPublishingProfiles",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/connectorGroups/{{$parameter[\"connectorGroup-id\"]}}/members/$ref"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles Connector Groups Create Ref Members",
					"value": "On Premises Publishing Profiles Connector Groups Create Ref Members",
					"action": "Create new navigation property ref to members for onPremisesPublishingProfiles",
					"description": "Create new navigation property ref to members for onPremisesPublishingProfiles",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/connectorGroups/{{$parameter[\"connectorGroup-id\"]}}/members/$ref"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles Connector Groups Delete Ref Members",
					"value": "On Premises Publishing Profiles Connector Groups Delete Ref Members",
					"action": "Delete ref of navigation property members for onPremisesPublishingProfiles",
					"description": "Delete ref of navigation property members for onPremisesPublishingProfiles",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/connectorGroups/{{$parameter[\"connectorGroup-id\"]}}/members/{{$parameter[\"connector-id\"]}}/$ref"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles List Connector Groups"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles List Connector Groups"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles List Connector Groups"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles List Connector Groups"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles List Connector Groups"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles List Connector Groups"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles List Connector Groups"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles List Connector Groups"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles List Connector Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Create Connector Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Create Connector Groups"
					]
				}
			}
		},
		{
			"displayName": "DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Delete Connector Groups"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Delete Connector Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Get Connector Groups"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Get Connector Groups"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Get Connector Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Update Connector Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Update Connector Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups List Applications"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups List Applications"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups List Applications"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups List Applications"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups List Applications"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups List Applications"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups List Applications"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups List Applications"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups List Applications"
					]
				}
			}
		},
		{
			"displayName": "GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups Get Applications"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups Get Applications"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups Get Applications"
					]
				}
			}
		},
		{
			"displayName": "GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups Get Applications Logo"
					]
				}
			}
		},
		{
			"displayName": "PUT /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups Update Applications Logo"
					]
				}
			}
		},
		{
			"displayName": "PUT /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/applications/{application-id}/logo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups Update Applications Logo"
					]
				}
			}
		},
		{
			"displayName": "GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups List Members"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups List Members"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups List Members"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups List Members"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups List Members"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups List Members"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups List Members"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups List Members"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups List Members"
					]
				}
			}
		},
		{
			"displayName": "GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/members/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups List Ref Members"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups List Ref Members"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups List Ref Members"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups List Ref Members"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups List Ref Members"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups List Ref Members"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups List Ref Members"
					]
				}
			}
		},
		{
			"displayName": "POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/members/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups Create Ref Members"
					]
				}
			}
		},
		{
			"displayName": "Odata ID",
			"name": "@odata-id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups Create Ref Members"
					]
				}
			}
		},
		{
			"displayName": "DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectorGroups/{connectorGroup-id}/members/{connector-id}/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups Delete Ref Members"
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
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups Delete Ref Members"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "%40id",
			"description": "Delete Uri",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "@id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector Group"
					],
					"operation": [
						"On Premises Publishing Profiles Connector Groups Delete Ref Members"
					]
				}
			}
		},
];
