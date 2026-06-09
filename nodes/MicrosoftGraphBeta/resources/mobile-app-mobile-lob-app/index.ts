import type { INodeProperties } from 'n8n-workflow';

export const mobileAppMobileLobAppDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Mobile App Mobile Lob App"
					]
				}
			},
			"options": [
				{
					"name": "Get Microsoft Graph Mobile App Items As Microsoft Graph Mobile Lob App 2294",
					"value": "Get Microsoft Graph Mobile App Items As Microsoft Graph Mobile Lob App 2294",
					"action": "Get the items of type microsoft.graph.mobileLobApp in the microsoft.graph.mobileApp collection",
					"description": "Get the items of type microsoft.graph.mobileLobApp in the microsoft.graph.mobileApp collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileApps/microsoft.graph.mobileLobApp"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Mobile App Item As Microsoft Graph Mobile Lob App 0 Db 8",
					"value": "Get Microsoft Graph Mobile App Item As Microsoft Graph Mobile Lob App 0 Db 8",
					"action": "Get the item of type microsoft.graph.mobileApp as microsoft.graph.mobileLobApp",
					"description": "Get the item of type microsoft.graph.mobileApp as microsoft.graph.mobileLobApp",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/mobileApps/{{$parameter[\"mobileApp-id\"]}}/microsoft.graph.mobileLobApp"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceAppManagement/mobileApps/microsoft.graph.mobileLobApp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mobile App Mobile Lob App"
					],
					"operation": [
						"Get Microsoft Graph Mobile App Items As Microsoft Graph Mobile Lob App 2294"
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
						"Mobile App Mobile Lob App"
					],
					"operation": [
						"Get Microsoft Graph Mobile App Items As Microsoft Graph Mobile Lob App 2294"
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
						"Mobile App Mobile Lob App"
					],
					"operation": [
						"Get Microsoft Graph Mobile App Items As Microsoft Graph Mobile Lob App 2294"
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
						"Mobile App Mobile Lob App"
					],
					"operation": [
						"Get Microsoft Graph Mobile App Items As Microsoft Graph Mobile Lob App 2294"
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
						"Mobile App Mobile Lob App"
					],
					"operation": [
						"Get Microsoft Graph Mobile App Items As Microsoft Graph Mobile Lob App 2294"
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
						"Mobile App Mobile Lob App"
					],
					"operation": [
						"Get Microsoft Graph Mobile App Items As Microsoft Graph Mobile Lob App 2294"
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
						"Mobile App Mobile Lob App"
					],
					"operation": [
						"Get Microsoft Graph Mobile App Items As Microsoft Graph Mobile Lob App 2294"
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
						"Mobile App Mobile Lob App"
					],
					"operation": [
						"Get Microsoft Graph Mobile App Items As Microsoft Graph Mobile Lob App 2294"
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
						"Mobile App Mobile Lob App"
					],
					"operation": [
						"Get Microsoft Graph Mobile App Items As Microsoft Graph Mobile Lob App 2294"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/mobileApps/{mobileApp-id}/microsoft.graph.mobileLobApp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mobile App Mobile Lob App"
					],
					"operation": [
						"Get Microsoft Graph Mobile App Item As Microsoft Graph Mobile Lob App 0 Db 8"
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
						"Mobile App Mobile Lob App"
					],
					"operation": [
						"Get Microsoft Graph Mobile App Item As Microsoft Graph Mobile Lob App 0 Db 8"
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
						"Mobile App Mobile Lob App"
					],
					"operation": [
						"Get Microsoft Graph Mobile App Item As Microsoft Graph Mobile Lob App 0 Db 8"
					]
				}
			}
		},
];
