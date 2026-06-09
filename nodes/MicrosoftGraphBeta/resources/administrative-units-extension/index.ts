import type { INodeProperties } from 'n8n-workflow';

export const administrativeUnitsExtensionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Administrative Units Extension"
					]
				}
			},
			"options": [
				{
					"name": "Administrative Units List Extensions",
					"value": "Administrative Units List Extensions",
					"action": "Get extensions from administrativeUnits",
					"description": "The collection of open extensions defined for this administrative unit. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Administrative Units Create Extensions",
					"value": "Administrative Units Create Extensions",
					"action": "Create new navigation property to extensions for administrativeUnits",
					"description": "Create new navigation property to extensions for administrativeUnits",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Administrative Units Delete Extensions",
					"value": "Administrative Units Delete Extensions",
					"action": "Delete navigation property extensions for administrativeUnits",
					"description": "Delete navigation property extensions for administrativeUnits",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Administrative Units Get Extensions",
					"value": "Administrative Units Get Extensions",
					"action": "Get extensions from administrativeUnits",
					"description": "The collection of open extensions defined for this administrative unit. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Administrative Units Update Extensions",
					"value": "Administrative Units Update Extensions",
					"action": "Update the navigation property extensions in administrativeUnits",
					"description": "Update the navigation property extensions in administrativeUnits",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /administrativeUnits/{administrativeUnit-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrative Units Extension"
					],
					"operation": [
						"Administrative Units List Extensions"
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
						"Administrative Units Extension"
					],
					"operation": [
						"Administrative Units List Extensions"
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
						"Administrative Units Extension"
					],
					"operation": [
						"Administrative Units List Extensions"
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
						"Administrative Units Extension"
					],
					"operation": [
						"Administrative Units List Extensions"
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
						"Administrative Units Extension"
					],
					"operation": [
						"Administrative Units List Extensions"
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
						"Administrative Units Extension"
					],
					"operation": [
						"Administrative Units List Extensions"
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
						"Administrative Units Extension"
					],
					"operation": [
						"Administrative Units List Extensions"
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
						"Administrative Units Extension"
					],
					"operation": [
						"Administrative Units List Extensions"
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
						"Administrative Units Extension"
					],
					"operation": [
						"Administrative Units List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /administrativeUnits/{administrativeUnit-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrative Units Extension"
					],
					"operation": [
						"Administrative Units Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /administrativeUnits/{administrativeUnit-id}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrative Units Extension"
					],
					"operation": [
						"Administrative Units Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrative Units Extension"
					],
					"operation": [
						"Administrative Units Delete Extensions"
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
						"Administrative Units Extension"
					],
					"operation": [
						"Administrative Units Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrative Units Extension"
					],
					"operation": [
						"Administrative Units Get Extensions"
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
						"Administrative Units Extension"
					],
					"operation": [
						"Administrative Units Get Extensions"
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
						"Administrative Units Extension"
					],
					"operation": [
						"Administrative Units Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrative Units Extension"
					],
					"operation": [
						"Administrative Units Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /administrativeUnits/{administrativeUnit-id}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrative Units Extension"
					],
					"operation": [
						"Administrative Units Update Extensions"
					]
				}
			}
		},
];
