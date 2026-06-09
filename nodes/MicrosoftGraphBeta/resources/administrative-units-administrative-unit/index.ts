import type { INodeProperties } from 'n8n-workflow';

export const administrativeUnitsAdministrativeUnitDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Administrative Units Administrative Unit"
					]
				}
			},
			"options": [
				{
					"name": "Administrative Units Administrative Unit List Administrative Unit",
					"value": "Administrative Units Administrative Unit List Administrative Unit",
					"action": "List administrativeUnits",
					"description": "Retrieve a list of administrativeUnit objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/administrativeUnits"
						}
					}
				},
				{
					"name": "Administrative Units Administrative Unit Create Administrative Unit",
					"value": "Administrative Units Administrative Unit Create Administrative Unit",
					"action": "Create administrativeUnit",
					"description": "Use this API to create a new administrativeUnit.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/administrativeUnits"
						}
					}
				},
				{
					"name": "Administrative Units Administrative Unit Delete Administrative Unit",
					"value": "Administrative Units Administrative Unit Delete Administrative Unit",
					"action": "Delete administrativeUnit",
					"description": "Delete an administrativeUnit.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}"
						}
					}
				},
				{
					"name": "Administrative Units Administrative Unit Get Administrative Unit",
					"value": "Administrative Units Administrative Unit Get Administrative Unit",
					"action": "Get administrativeUnit",
					"description": "Retrieve the properties and relationships of an administrativeUnit object. Since the **administrativeUnit** resource supports extensions, you can also use the `GET` operation to get custom properties and extension data in an **administrativeUnit** instance.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}"
						}
					}
				},
				{
					"name": "Administrative Units Administrative Unit Update Administrative Unit",
					"value": "Administrative Units Administrative Unit Update Administrative Unit",
					"action": "Update administrativeunit",
					"description": "Update the properties of an administrativeUnit object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /administrativeUnits",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrative Units Administrative Unit"
					],
					"operation": [
						"Administrative Units Administrative Unit List Administrative Unit"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Administrative Units Administrative Unit"
					],
					"operation": [
						"Administrative Units Administrative Unit List Administrative Unit"
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
						"Administrative Units Administrative Unit"
					],
					"operation": [
						"Administrative Units Administrative Unit List Administrative Unit"
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
						"Administrative Units Administrative Unit"
					],
					"operation": [
						"Administrative Units Administrative Unit List Administrative Unit"
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
						"Administrative Units Administrative Unit"
					],
					"operation": [
						"Administrative Units Administrative Unit List Administrative Unit"
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
						"Administrative Units Administrative Unit"
					],
					"operation": [
						"Administrative Units Administrative Unit List Administrative Unit"
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
						"Administrative Units Administrative Unit"
					],
					"operation": [
						"Administrative Units Administrative Unit List Administrative Unit"
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
						"Administrative Units Administrative Unit"
					],
					"operation": [
						"Administrative Units Administrative Unit List Administrative Unit"
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
						"Administrative Units Administrative Unit"
					],
					"operation": [
						"Administrative Units Administrative Unit List Administrative Unit"
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
						"Administrative Units Administrative Unit"
					],
					"operation": [
						"Administrative Units Administrative Unit List Administrative Unit"
					]
				}
			}
		},
		{
			"displayName": "POST /administrativeUnits",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrative Units Administrative Unit"
					],
					"operation": [
						"Administrative Units Administrative Unit Create Administrative Unit"
					]
				}
			}
		},
		{
			"displayName": "POST /administrativeUnits<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrative Units Administrative Unit"
					],
					"operation": [
						"Administrative Units Administrative Unit Create Administrative Unit"
					]
				}
			}
		},
		{
			"displayName": "DELETE /administrativeUnits/{administrativeUnit-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrative Units Administrative Unit"
					],
					"operation": [
						"Administrative Units Administrative Unit Delete Administrative Unit"
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
						"Administrative Units Administrative Unit"
					],
					"operation": [
						"Administrative Units Administrative Unit Delete Administrative Unit"
					]
				}
			}
		},
		{
			"displayName": "GET /administrativeUnits/{administrativeUnit-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrative Units Administrative Unit"
					],
					"operation": [
						"Administrative Units Administrative Unit Get Administrative Unit"
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
						"Administrative Units Administrative Unit"
					],
					"operation": [
						"Administrative Units Administrative Unit Get Administrative Unit"
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
						"Administrative Units Administrative Unit"
					],
					"operation": [
						"Administrative Units Administrative Unit Get Administrative Unit"
					]
				}
			}
		},
		{
			"displayName": "PATCH /administrativeUnits/{administrativeUnit-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrative Units Administrative Unit"
					],
					"operation": [
						"Administrative Units Administrative Unit Update Administrative Unit"
					]
				}
			}
		},
		{
			"displayName": "PATCH /administrativeUnits/{administrativeUnit-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrative Units Administrative Unit"
					],
					"operation": [
						"Administrative Units Administrative Unit Update Administrative Unit"
					]
				}
			}
		},
];
