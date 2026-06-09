import type { INodeProperties } from 'n8n-workflow';

export const sharesFunctionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Functions"
					]
				}
			},
			"options": [
				{
					"name": "Shares Shared Drive Item List Content Types Get Compatible Hub Content Types",
					"value": "Shares Shared Drive Item List Content Types Get Compatible Hub Content Types",
					"action": "Invoke function getCompatibleHubContentTypes",
					"description": "Invoke function getCompatibleHubContentTypes",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/contentTypes/microsoft.graph.getCompatibleHubContentTypes()"
						}
					}
				},
				{
					"name": "Shares Shared Drive Item List Content Types Content Type Is Published",
					"value": "Shares Shared Drive Item List Content Types Content Type Is Published",
					"action": "Invoke function isPublished",
					"description": "Invoke function isPublished",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/contentTypes/{{$parameter[\"contentType-id\"]}}/microsoft.graph.isPublished()"
						}
					}
				},
				{
					"name": "Shares Shared Drive Item List Items Delta",
					"value": "Shares Shared Drive Item List Items Delta",
					"action": "Invoke function delta",
					"description": "Invoke function delta",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/microsoft.graph.delta()"
						}
					}
				},
				{
					"name": "GET Shares List Items Microsoft Graph Delta Token Token",
					"value": "GET Shares List Items Microsoft Graph Delta Token Token",
					"action": "Invoke function delta",
					"description": "Invoke function delta",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/microsoft.graph.delta(token='{{$parameter[\"token\"]}}')"
						}
					}
				},
				{
					"name": "Shares Shared Drive Item List Items List Item Get Activities By Interval",
					"value": "Shares Shared Drive Item List Items List Item Get Activities By Interval",
					"action": "Invoke function getActivitiesByInterval",
					"description": "Invoke function getActivitiesByInterval",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/list/items/{{$parameter[\"listItem-id\"]}}/microsoft.graph.getActivitiesByInterval(startDateTime='{{$parameter[\"startDateTime\"]}}',endDateTime='{{$parameter[\"endDateTime\"]}}',interval='{{$parameter[\"interval\"]}}')"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/contentTypes/microsoft.graph.getCompatibleHubContentTypes()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Functions"
					],
					"operation": [
						"Shares Shared Drive Item List Content Types Get Compatible Hub Content Types"
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
						"Shares Functions"
					],
					"operation": [
						"Shares Shared Drive Item List Content Types Get Compatible Hub Content Types"
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
						"Shares Functions"
					],
					"operation": [
						"Shares Shared Drive Item List Content Types Get Compatible Hub Content Types"
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
						"Shares Functions"
					],
					"operation": [
						"Shares Shared Drive Item List Content Types Get Compatible Hub Content Types"
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
						"Shares Functions"
					],
					"operation": [
						"Shares Shared Drive Item List Content Types Get Compatible Hub Content Types"
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
						"Shares Functions"
					],
					"operation": [
						"Shares Shared Drive Item List Content Types Get Compatible Hub Content Types"
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
						"Shares Functions"
					],
					"operation": [
						"Shares Shared Drive Item List Content Types Get Compatible Hub Content Types"
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
						"Shares Functions"
					],
					"operation": [
						"Shares Shared Drive Item List Content Types Get Compatible Hub Content Types"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/contentTypes/{contentType-id}/microsoft.graph.isPublished()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Functions"
					],
					"operation": [
						"Shares Shared Drive Item List Content Types Content Type Is Published"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/items/microsoft.graph.delta()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Functions"
					],
					"operation": [
						"Shares Shared Drive Item List Items Delta"
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
						"Shares Functions"
					],
					"operation": [
						"Shares Shared Drive Item List Items Delta"
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
						"Shares Functions"
					],
					"operation": [
						"Shares Shared Drive Item List Items Delta"
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
						"Shares Functions"
					],
					"operation": [
						"Shares Shared Drive Item List Items Delta"
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
						"Shares Functions"
					],
					"operation": [
						"Shares Shared Drive Item List Items Delta"
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
						"Shares Functions"
					],
					"operation": [
						"Shares Shared Drive Item List Items Delta"
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
						"Shares Functions"
					],
					"operation": [
						"Shares Shared Drive Item List Items Delta"
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
						"Shares Functions"
					],
					"operation": [
						"Shares Shared Drive Item List Items Delta"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/items/microsoft.graph.delta(token='{token}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Functions"
					],
					"operation": [
						"GET Shares List Items Microsoft Graph Delta Token Token"
					]
				}
			}
		},
		{
			"displayName": "Token",
			"name": "token",
			"required": true,
			"description": "Usage: token='{token}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Functions"
					],
					"operation": [
						"GET Shares List Items Microsoft Graph Delta Token Token"
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
						"Shares Functions"
					],
					"operation": [
						"GET Shares List Items Microsoft Graph Delta Token Token"
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
						"Shares Functions"
					],
					"operation": [
						"GET Shares List Items Microsoft Graph Delta Token Token"
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
						"Shares Functions"
					],
					"operation": [
						"GET Shares List Items Microsoft Graph Delta Token Token"
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
						"Shares Functions"
					],
					"operation": [
						"GET Shares List Items Microsoft Graph Delta Token Token"
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
						"Shares Functions"
					],
					"operation": [
						"GET Shares List Items Microsoft Graph Delta Token Token"
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
						"Shares Functions"
					],
					"operation": [
						"GET Shares List Items Microsoft Graph Delta Token Token"
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
						"Shares Functions"
					],
					"operation": [
						"GET Shares List Items Microsoft Graph Delta Token Token"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/microsoft.graph.getActivitiesByInterval(startDateTime='{startDateTime}',endDateTime='{endDateTime}',interval='{interval}')",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Functions"
					],
					"operation": [
						"Shares Shared Drive Item List Items List Item Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "Start Date Time",
			"name": "startDateTime",
			"required": true,
			"description": "Usage: startDateTime='{startDateTime}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Functions"
					],
					"operation": [
						"Shares Shared Drive Item List Items List Item Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "End Date Time",
			"name": "endDateTime",
			"required": true,
			"description": "Usage: endDateTime='{endDateTime}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Functions"
					],
					"operation": [
						"Shares Shared Drive Item List Items List Item Get Activities By Interval"
					]
				}
			}
		},
		{
			"displayName": "Interval",
			"name": "interval",
			"required": true,
			"description": "Usage: interval='{interval}'",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Functions"
					],
					"operation": [
						"Shares Shared Drive Item List Items List Item Get Activities By Interval"
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
						"Shares Functions"
					],
					"operation": [
						"Shares Shared Drive Item List Items List Item Get Activities By Interval"
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
						"Shares Functions"
					],
					"operation": [
						"Shares Shared Drive Item List Items List Item Get Activities By Interval"
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
						"Shares Functions"
					],
					"operation": [
						"Shares Shared Drive Item List Items List Item Get Activities By Interval"
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
						"Shares Functions"
					],
					"operation": [
						"Shares Shared Drive Item List Items List Item Get Activities By Interval"
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
						"Shares Functions"
					],
					"operation": [
						"Shares Shared Drive Item List Items List Item Get Activities By Interval"
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
						"Shares Functions"
					],
					"operation": [
						"Shares Shared Drive Item List Items List Item Get Activities By Interval"
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
						"Shares Functions"
					],
					"operation": [
						"Shares Shared Drive Item List Items List Item Get Activities By Interval"
					]
				}
			}
		},
];
