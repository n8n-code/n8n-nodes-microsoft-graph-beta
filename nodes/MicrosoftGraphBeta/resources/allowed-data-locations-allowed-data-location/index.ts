import type { INodeProperties } from 'n8n-workflow';

export const allowedDataLocationsAllowedDataLocationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Allowed Data Locations Allowed Data Location"
					]
				}
			},
			"options": [
				{
					"name": "Allowed Data Locations Allowed Data Location List Allowed Data Location",
					"value": "Allowed Data Locations Allowed Data Location List Allowed Data Location",
					"action": "Get entities from allowedDataLocations",
					"description": "Get entities from allowedDataLocations",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/allowedDataLocations"
						}
					}
				},
				{
					"name": "Allowed Data Locations Allowed Data Location Create Allowed Data Location",
					"value": "Allowed Data Locations Allowed Data Location Create Allowed Data Location",
					"action": "Add new entity to allowedDataLocations",
					"description": "Add new entity to allowedDataLocations",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/allowedDataLocations"
						}
					}
				},
				{
					"name": "Allowed Data Locations Allowed Data Location Delete Allowed Data Location",
					"value": "Allowed Data Locations Allowed Data Location Delete Allowed Data Location",
					"action": "Delete entity from allowedDataLocations",
					"description": "Delete entity from allowedDataLocations",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/allowedDataLocations/{{$parameter[\"allowedDataLocation-id\"]}}"
						}
					}
				},
				{
					"name": "Allowed Data Locations Allowed Data Location Get Allowed Data Location",
					"value": "Allowed Data Locations Allowed Data Location Get Allowed Data Location",
					"action": "Get entity from allowedDataLocations by key",
					"description": "Get entity from allowedDataLocations by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/allowedDataLocations/{{$parameter[\"allowedDataLocation-id\"]}}"
						}
					}
				},
				{
					"name": "Allowed Data Locations Allowed Data Location Update Allowed Data Location",
					"value": "Allowed Data Locations Allowed Data Location Update Allowed Data Location",
					"action": "Update entity in allowedDataLocations",
					"description": "Update entity in allowedDataLocations",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/allowedDataLocations/{{$parameter[\"allowedDataLocation-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /allowedDataLocations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Allowed Data Locations Allowed Data Location"
					],
					"operation": [
						"Allowed Data Locations Allowed Data Location List Allowed Data Location"
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
						"Allowed Data Locations Allowed Data Location"
					],
					"operation": [
						"Allowed Data Locations Allowed Data Location List Allowed Data Location"
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
						"Allowed Data Locations Allowed Data Location"
					],
					"operation": [
						"Allowed Data Locations Allowed Data Location List Allowed Data Location"
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
						"Allowed Data Locations Allowed Data Location"
					],
					"operation": [
						"Allowed Data Locations Allowed Data Location List Allowed Data Location"
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
						"Allowed Data Locations Allowed Data Location"
					],
					"operation": [
						"Allowed Data Locations Allowed Data Location List Allowed Data Location"
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
						"Allowed Data Locations Allowed Data Location"
					],
					"operation": [
						"Allowed Data Locations Allowed Data Location List Allowed Data Location"
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
						"Allowed Data Locations Allowed Data Location"
					],
					"operation": [
						"Allowed Data Locations Allowed Data Location List Allowed Data Location"
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
						"Allowed Data Locations Allowed Data Location"
					],
					"operation": [
						"Allowed Data Locations Allowed Data Location List Allowed Data Location"
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
						"Allowed Data Locations Allowed Data Location"
					],
					"operation": [
						"Allowed Data Locations Allowed Data Location List Allowed Data Location"
					]
				}
			}
		},
		{
			"displayName": "POST /allowedDataLocations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Allowed Data Locations Allowed Data Location"
					],
					"operation": [
						"Allowed Data Locations Allowed Data Location Create Allowed Data Location"
					]
				}
			}
		},
		{
			"displayName": "POST /allowedDataLocations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Allowed Data Locations Allowed Data Location"
					],
					"operation": [
						"Allowed Data Locations Allowed Data Location Create Allowed Data Location"
					]
				}
			}
		},
		{
			"displayName": "DELETE /allowedDataLocations/{allowedDataLocation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Allowed Data Locations Allowed Data Location"
					],
					"operation": [
						"Allowed Data Locations Allowed Data Location Delete Allowed Data Location"
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
						"Allowed Data Locations Allowed Data Location"
					],
					"operation": [
						"Allowed Data Locations Allowed Data Location Delete Allowed Data Location"
					]
				}
			}
		},
		{
			"displayName": "GET /allowedDataLocations/{allowedDataLocation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Allowed Data Locations Allowed Data Location"
					],
					"operation": [
						"Allowed Data Locations Allowed Data Location Get Allowed Data Location"
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
						"Allowed Data Locations Allowed Data Location"
					],
					"operation": [
						"Allowed Data Locations Allowed Data Location Get Allowed Data Location"
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
						"Allowed Data Locations Allowed Data Location"
					],
					"operation": [
						"Allowed Data Locations Allowed Data Location Get Allowed Data Location"
					]
				}
			}
		},
		{
			"displayName": "PATCH /allowedDataLocations/{allowedDataLocation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Allowed Data Locations Allowed Data Location"
					],
					"operation": [
						"Allowed Data Locations Allowed Data Location Update Allowed Data Location"
					]
				}
			}
		},
		{
			"displayName": "PATCH /allowedDataLocations/{allowedDataLocation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Allowed Data Locations Allowed Data Location"
					],
					"operation": [
						"Allowed Data Locations Allowed Data Location Update Allowed Data Location"
					]
				}
			}
		},
];
