import type { INodeProperties } from 'n8n-workflow';

export const certificateBasedAuthConfigurationCertificateBasedAuthConfigurationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Certificate Based Auth Configuration Certificate Based Auth Configuration"
					]
				}
			},
			"options": [
				{
					"name": "Certificate Based Auth Configuration Certificate Based Auth Configuration List Certificate Based Auth Configuration",
					"value": "Certificate Based Auth Configuration Certificate Based Auth Configuration List Certificate Based Auth Configuration",
					"action": "Get entities from certificateBasedAuthConfiguration",
					"description": "Get entities from certificateBasedAuthConfiguration",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/certificateBasedAuthConfiguration"
						}
					}
				},
				{
					"name": "Certificate Based Auth Configuration Certificate Based Auth Configuration Create Certificate Based Auth Configuration",
					"value": "Certificate Based Auth Configuration Certificate Based Auth Configuration Create Certificate Based Auth Configuration",
					"action": "Add new entity to certificateBasedAuthConfiguration",
					"description": "Add new entity to certificateBasedAuthConfiguration",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/certificateBasedAuthConfiguration"
						}
					}
				},
				{
					"name": "Certificate Based Auth Configuration Certificate Based Auth Configuration Delete Certificate Based Auth Configuration",
					"value": "Certificate Based Auth Configuration Certificate Based Auth Configuration Delete Certificate Based Auth Configuration",
					"action": "Delete entity from certificateBasedAuthConfiguration",
					"description": "Delete entity from certificateBasedAuthConfiguration",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/certificateBasedAuthConfiguration/{{$parameter[\"certificateBasedAuthConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Certificate Based Auth Configuration Certificate Based Auth Configuration Get Certificate Based Auth Configuration",
					"value": "Certificate Based Auth Configuration Certificate Based Auth Configuration Get Certificate Based Auth Configuration",
					"action": "Get entity from certificateBasedAuthConfiguration by key",
					"description": "Get entity from certificateBasedAuthConfiguration by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/certificateBasedAuthConfiguration/{{$parameter[\"certificateBasedAuthConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Certificate Based Auth Configuration Certificate Based Auth Configuration Update Certificate Based Auth Configuration",
					"value": "Certificate Based Auth Configuration Certificate Based Auth Configuration Update Certificate Based Auth Configuration",
					"action": "Update entity in certificateBasedAuthConfiguration",
					"description": "Update entity in certificateBasedAuthConfiguration",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/certificateBasedAuthConfiguration/{{$parameter[\"certificateBasedAuthConfiguration-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /certificateBasedAuthConfiguration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Certificate Based Auth Configuration Certificate Based Auth Configuration"
					],
					"operation": [
						"Certificate Based Auth Configuration Certificate Based Auth Configuration List Certificate Based Auth Configuration"
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
						"Certificate Based Auth Configuration Certificate Based Auth Configuration"
					],
					"operation": [
						"Certificate Based Auth Configuration Certificate Based Auth Configuration List Certificate Based Auth Configuration"
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
						"Certificate Based Auth Configuration Certificate Based Auth Configuration"
					],
					"operation": [
						"Certificate Based Auth Configuration Certificate Based Auth Configuration List Certificate Based Auth Configuration"
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
						"Certificate Based Auth Configuration Certificate Based Auth Configuration"
					],
					"operation": [
						"Certificate Based Auth Configuration Certificate Based Auth Configuration List Certificate Based Auth Configuration"
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
						"Certificate Based Auth Configuration Certificate Based Auth Configuration"
					],
					"operation": [
						"Certificate Based Auth Configuration Certificate Based Auth Configuration List Certificate Based Auth Configuration"
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
						"Certificate Based Auth Configuration Certificate Based Auth Configuration"
					],
					"operation": [
						"Certificate Based Auth Configuration Certificate Based Auth Configuration List Certificate Based Auth Configuration"
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
						"Certificate Based Auth Configuration Certificate Based Auth Configuration"
					],
					"operation": [
						"Certificate Based Auth Configuration Certificate Based Auth Configuration List Certificate Based Auth Configuration"
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
						"Certificate Based Auth Configuration Certificate Based Auth Configuration"
					],
					"operation": [
						"Certificate Based Auth Configuration Certificate Based Auth Configuration List Certificate Based Auth Configuration"
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
						"Certificate Based Auth Configuration Certificate Based Auth Configuration"
					],
					"operation": [
						"Certificate Based Auth Configuration Certificate Based Auth Configuration List Certificate Based Auth Configuration"
					]
				}
			}
		},
		{
			"displayName": "POST /certificateBasedAuthConfiguration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Certificate Based Auth Configuration Certificate Based Auth Configuration"
					],
					"operation": [
						"Certificate Based Auth Configuration Certificate Based Auth Configuration Create Certificate Based Auth Configuration"
					]
				}
			}
		},
		{
			"displayName": "POST /certificateBasedAuthConfiguration<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Certificate Based Auth Configuration Certificate Based Auth Configuration"
					],
					"operation": [
						"Certificate Based Auth Configuration Certificate Based Auth Configuration Create Certificate Based Auth Configuration"
					]
				}
			}
		},
		{
			"displayName": "DELETE /certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Certificate Based Auth Configuration Certificate Based Auth Configuration"
					],
					"operation": [
						"Certificate Based Auth Configuration Certificate Based Auth Configuration Delete Certificate Based Auth Configuration"
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
						"Certificate Based Auth Configuration Certificate Based Auth Configuration"
					],
					"operation": [
						"Certificate Based Auth Configuration Certificate Based Auth Configuration Delete Certificate Based Auth Configuration"
					]
				}
			}
		},
		{
			"displayName": "GET /certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Certificate Based Auth Configuration Certificate Based Auth Configuration"
					],
					"operation": [
						"Certificate Based Auth Configuration Certificate Based Auth Configuration Get Certificate Based Auth Configuration"
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
						"Certificate Based Auth Configuration Certificate Based Auth Configuration"
					],
					"operation": [
						"Certificate Based Auth Configuration Certificate Based Auth Configuration Get Certificate Based Auth Configuration"
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
						"Certificate Based Auth Configuration Certificate Based Auth Configuration"
					],
					"operation": [
						"Certificate Based Auth Configuration Certificate Based Auth Configuration Get Certificate Based Auth Configuration"
					]
				}
			}
		},
		{
			"displayName": "PATCH /certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Certificate Based Auth Configuration Certificate Based Auth Configuration"
					],
					"operation": [
						"Certificate Based Auth Configuration Certificate Based Auth Configuration Update Certificate Based Auth Configuration"
					]
				}
			}
		},
		{
			"displayName": "PATCH /certificateBasedAuthConfiguration/{certificateBasedAuthConfiguration-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Certificate Based Auth Configuration Certificate Based Auth Configuration"
					],
					"operation": [
						"Certificate Based Auth Configuration Certificate Based Auth Configuration Update Certificate Based Auth Configuration"
					]
				}
			}
		},
];
