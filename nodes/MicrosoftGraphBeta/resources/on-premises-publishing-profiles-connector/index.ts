import type { INodeProperties } from 'n8n-workflow';

export const onPremisesPublishingProfilesConnectorDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector"
					]
				}
			},
			"options": [
				{
					"name": "On Premises Publishing Profiles List Connectors",
					"value": "On Premises Publishing Profiles List Connectors",
					"action": "List connectors",
					"description": "Retrieve a list of connector objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/connectors"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles Create Connectors",
					"value": "On Premises Publishing Profiles Create Connectors",
					"action": "Create new navigation property to connectors for onPremisesPublishingProfiles",
					"description": "Create new navigation property to connectors for onPremisesPublishingProfiles",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/connectors"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles Delete Connectors",
					"value": "On Premises Publishing Profiles Delete Connectors",
					"action": "Delete navigation property connectors for onPremisesPublishingProfiles",
					"description": "Delete navigation property connectors for onPremisesPublishingProfiles",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/connectors/{{$parameter[\"connector-id\"]}}"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles Get Connectors",
					"value": "On Premises Publishing Profiles Get Connectors",
					"action": "Get connectors from onPremisesPublishingProfiles",
					"description": "List of existing connector objects for applications published through Application Proxy. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/connectors/{{$parameter[\"connector-id\"]}}"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles Update Connectors",
					"value": "On Premises Publishing Profiles Update Connectors",
					"action": "Update the navigation property connectors in onPremisesPublishingProfiles",
					"description": "Update the navigation property connectors in onPremisesPublishingProfiles",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/connectors/{{$parameter[\"connector-id\"]}}"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles Connectors List Member Of",
					"value": "On Premises Publishing Profiles Connectors List Member Of",
					"action": "Get memberOf from onPremisesPublishingProfiles",
					"description": "The connectorGroup that the connector is a member of. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/connectors/{{$parameter[\"connector-id\"]}}/memberOf"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles Connectors List Ref Member Of",
					"value": "On Premises Publishing Profiles Connectors List Ref Member Of",
					"action": "Get ref of memberOf from onPremisesPublishingProfiles",
					"description": "The connectorGroup that the connector is a member of. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/connectors/{{$parameter[\"connector-id\"]}}/memberOf/$ref"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles Connectors Create Ref Member Of",
					"value": "On Premises Publishing Profiles Connectors Create Ref Member Of",
					"action": "Create new navigation property ref to memberOf for onPremisesPublishingProfiles",
					"description": "Create new navigation property ref to memberOf for onPremisesPublishingProfiles",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/connectors/{{$parameter[\"connector-id\"]}}/memberOf/$ref"
						}
					}
				},
				{
					"name": "On Premises Publishing Profiles Connectors Delete Ref Member Of",
					"value": "On Premises Publishing Profiles Connectors Delete Ref Member Of",
					"action": "Delete ref of navigation property memberOf for onPremisesPublishingProfiles",
					"description": "Delete ref of navigation property memberOf for onPremisesPublishingProfiles",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/onPremisesPublishingProfiles/{{$parameter[\"onPremisesPublishingProfile-id\"]}}/connectors/{{$parameter[\"connector-id\"]}}/memberOf/{{$parameter[\"connectorGroup-id\"]}}/$ref"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles List Connectors"
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
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles List Connectors"
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
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles List Connectors"
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
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles List Connectors"
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
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles List Connectors"
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
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles List Connectors"
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
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles List Connectors"
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
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles List Connectors"
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
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles List Connectors"
					]
				}
			}
		},
		{
			"displayName": "POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles Create Connectors"
					]
				}
			}
		},
		{
			"displayName": "POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectors<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles Create Connectors"
					]
				}
			}
		},
		{
			"displayName": "DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectors/{connector-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles Delete Connectors"
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
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles Delete Connectors"
					]
				}
			}
		},
		{
			"displayName": "GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectors/{connector-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles Get Connectors"
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
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles Get Connectors"
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
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles Get Connectors"
					]
				}
			}
		},
		{
			"displayName": "PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectors/{connector-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles Update Connectors"
					]
				}
			}
		},
		{
			"displayName": "PATCH /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectors/{connector-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles Update Connectors"
					]
				}
			}
		},
		{
			"displayName": "GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectors/{connector-id}/memberOf",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles Connectors List Member Of"
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
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles Connectors List Member Of"
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
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles Connectors List Member Of"
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
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles Connectors List Member Of"
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
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles Connectors List Member Of"
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
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles Connectors List Member Of"
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
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles Connectors List Member Of"
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
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles Connectors List Member Of"
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
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles Connectors List Member Of"
					]
				}
			}
		},
		{
			"displayName": "GET /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectors/{connector-id}/memberOf/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles Connectors List Ref Member Of"
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
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles Connectors List Ref Member Of"
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
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles Connectors List Ref Member Of"
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
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles Connectors List Ref Member Of"
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
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles Connectors List Ref Member Of"
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
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles Connectors List Ref Member Of"
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
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles Connectors List Ref Member Of"
					]
				}
			}
		},
		{
			"displayName": "POST /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectors/{connector-id}/memberOf/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles Connectors Create Ref Member Of"
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
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles Connectors Create Ref Member Of"
					]
				}
			}
		},
		{
			"displayName": "DELETE /onPremisesPublishingProfiles/{onPremisesPublishingProfile-id}/connectors/{connector-id}/memberOf/{connectorGroup-id}/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles Connectors Delete Ref Member Of"
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
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles Connectors Delete Ref Member Of"
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
						"On Premises Publishing Profiles Connector"
					],
					"operation": [
						"On Premises Publishing Profiles Connectors Delete Ref Member Of"
					]
				}
			}
		},
];
