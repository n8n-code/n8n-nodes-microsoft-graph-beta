import type { INodeProperties } from 'n8n-workflow';

export const securityTiIndicatorDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Security Ti Indicator"
					]
				}
			},
			"options": [
				{
					"name": "Security List Ti Indicators",
					"value": "Security List Ti Indicators",
					"action": "List threat intelligence indicators",
					"description": "Retrieve a list of tiIndicator objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/tiIndicators"
						}
					}
				},
				{
					"name": "Security Create Ti Indicators",
					"value": "Security Create Ti Indicators",
					"action": "Create threat intelligence indicator",
					"description": "Create a new tiIndicator object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/tiIndicators"
						}
					}
				},
				{
					"name": "Security Delete Ti Indicators",
					"value": "Security Delete Ti Indicators",
					"action": "Delete navigation property tiIndicators for security",
					"description": "Delete navigation property tiIndicators for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/tiIndicators/{{$parameter[\"tiIndicator-id\"]}}"
						}
					}
				},
				{
					"name": "Security Get Ti Indicators",
					"value": "Security Get Ti Indicators",
					"action": "Get tiIndicators from security",
					"description": "Get tiIndicators from security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/tiIndicators/{{$parameter[\"tiIndicator-id\"]}}"
						}
					}
				},
				{
					"name": "Security Update Ti Indicators",
					"value": "Security Update Ti Indicators",
					"action": "Update the navigation property tiIndicators in security",
					"description": "Update the navigation property tiIndicators in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/tiIndicators/{{$parameter[\"tiIndicator-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /security/tiIndicators",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Ti Indicator"
					],
					"operation": [
						"Security List Ti Indicators"
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
						"Security Ti Indicator"
					],
					"operation": [
						"Security List Ti Indicators"
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
						"Security Ti Indicator"
					],
					"operation": [
						"Security List Ti Indicators"
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
						"Security Ti Indicator"
					],
					"operation": [
						"Security List Ti Indicators"
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
						"Security Ti Indicator"
					],
					"operation": [
						"Security List Ti Indicators"
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
						"Security Ti Indicator"
					],
					"operation": [
						"Security List Ti Indicators"
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
						"Security Ti Indicator"
					],
					"operation": [
						"Security List Ti Indicators"
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
						"Security Ti Indicator"
					],
					"operation": [
						"Security List Ti Indicators"
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
						"Security Ti Indicator"
					],
					"operation": [
						"Security List Ti Indicators"
					]
				}
			}
		},
		{
			"displayName": "POST /security/tiIndicators",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Ti Indicator"
					],
					"operation": [
						"Security Create Ti Indicators"
					]
				}
			}
		},
		{
			"displayName": "POST /security/tiIndicators<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Ti Indicator"
					],
					"operation": [
						"Security Create Ti Indicators"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/tiIndicators/{tiIndicator-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Ti Indicator"
					],
					"operation": [
						"Security Delete Ti Indicators"
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
						"Security Ti Indicator"
					],
					"operation": [
						"Security Delete Ti Indicators"
					]
				}
			}
		},
		{
			"displayName": "GET /security/tiIndicators/{tiIndicator-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Ti Indicator"
					],
					"operation": [
						"Security Get Ti Indicators"
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
						"Security Ti Indicator"
					],
					"operation": [
						"Security Get Ti Indicators"
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
						"Security Ti Indicator"
					],
					"operation": [
						"Security Get Ti Indicators"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/tiIndicators/{tiIndicator-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Ti Indicator"
					],
					"operation": [
						"Security Update Ti Indicators"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/tiIndicators/{tiIndicator-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Ti Indicator"
					],
					"operation": [
						"Security Update Ti Indicators"
					]
				}
			}
		},
];
