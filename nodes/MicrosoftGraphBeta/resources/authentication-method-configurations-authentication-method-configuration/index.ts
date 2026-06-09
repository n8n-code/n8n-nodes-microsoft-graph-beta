import type { INodeProperties } from 'n8n-workflow';

export const authenticationMethodConfigurationsAuthenticationMethodConfigurationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Method Configurations Authentication Method Configuration"
					]
				}
			},
			"options": [
				{
					"name": "Authentication Method Configurations Authentication Method Configuration List Authentication Method Configuration",
					"value": "Authentication Method Configurations Authentication Method Configuration List Authentication Method Configuration",
					"action": "Get entities from authenticationMethodConfigurations",
					"description": "Get entities from authenticationMethodConfigurations",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/authenticationMethodConfigurations"
						}
					}
				},
				{
					"name": "Authentication Method Configurations Authentication Method Configuration Create Authentication Method Configuration",
					"value": "Authentication Method Configurations Authentication Method Configuration Create Authentication Method Configuration",
					"action": "Add new entity to authenticationMethodConfigurations",
					"description": "Add new entity to authenticationMethodConfigurations",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/authenticationMethodConfigurations"
						}
					}
				},
				{
					"name": "Authentication Method Configurations Authentication Method Configuration Delete Authentication Method Configuration",
					"value": "Authentication Method Configurations Authentication Method Configuration Delete Authentication Method Configuration",
					"action": "Delete entity from authenticationMethodConfigurations",
					"description": "Delete entity from authenticationMethodConfigurations",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/authenticationMethodConfigurations/{{$parameter[\"authenticationMethodConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Authentication Method Configurations Authentication Method Configuration Get Authentication Method Configuration",
					"value": "Authentication Method Configurations Authentication Method Configuration Get Authentication Method Configuration",
					"action": "Get entity from authenticationMethodConfigurations by key",
					"description": "Get entity from authenticationMethodConfigurations by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/authenticationMethodConfigurations/{{$parameter[\"authenticationMethodConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Authentication Method Configurations Authentication Method Configuration Update Authentication Method Configuration",
					"value": "Authentication Method Configurations Authentication Method Configuration Update Authentication Method Configuration",
					"action": "Update entity in authenticationMethodConfigurations",
					"description": "Update entity in authenticationMethodConfigurations",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/authenticationMethodConfigurations/{{$parameter[\"authenticationMethodConfiguration-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /authenticationMethodConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Method Configurations Authentication Method Configuration"
					],
					"operation": [
						"Authentication Method Configurations Authentication Method Configuration List Authentication Method Configuration"
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
						"Authentication Method Configurations Authentication Method Configuration"
					],
					"operation": [
						"Authentication Method Configurations Authentication Method Configuration List Authentication Method Configuration"
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
						"Authentication Method Configurations Authentication Method Configuration"
					],
					"operation": [
						"Authentication Method Configurations Authentication Method Configuration List Authentication Method Configuration"
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
						"Authentication Method Configurations Authentication Method Configuration"
					],
					"operation": [
						"Authentication Method Configurations Authentication Method Configuration List Authentication Method Configuration"
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
						"Authentication Method Configurations Authentication Method Configuration"
					],
					"operation": [
						"Authentication Method Configurations Authentication Method Configuration List Authentication Method Configuration"
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
						"Authentication Method Configurations Authentication Method Configuration"
					],
					"operation": [
						"Authentication Method Configurations Authentication Method Configuration List Authentication Method Configuration"
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
						"Authentication Method Configurations Authentication Method Configuration"
					],
					"operation": [
						"Authentication Method Configurations Authentication Method Configuration List Authentication Method Configuration"
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
						"Authentication Method Configurations Authentication Method Configuration"
					],
					"operation": [
						"Authentication Method Configurations Authentication Method Configuration List Authentication Method Configuration"
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
						"Authentication Method Configurations Authentication Method Configuration"
					],
					"operation": [
						"Authentication Method Configurations Authentication Method Configuration List Authentication Method Configuration"
					]
				}
			}
		},
		{
			"displayName": "POST /authenticationMethodConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Method Configurations Authentication Method Configuration"
					],
					"operation": [
						"Authentication Method Configurations Authentication Method Configuration Create Authentication Method Configuration"
					]
				}
			}
		},
		{
			"displayName": "POST /authenticationMethodConfigurations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Method Configurations Authentication Method Configuration"
					],
					"operation": [
						"Authentication Method Configurations Authentication Method Configuration Create Authentication Method Configuration"
					]
				}
			}
		},
		{
			"displayName": "DELETE /authenticationMethodConfigurations/{authenticationMethodConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Method Configurations Authentication Method Configuration"
					],
					"operation": [
						"Authentication Method Configurations Authentication Method Configuration Delete Authentication Method Configuration"
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
						"Authentication Method Configurations Authentication Method Configuration"
					],
					"operation": [
						"Authentication Method Configurations Authentication Method Configuration Delete Authentication Method Configuration"
					]
				}
			}
		},
		{
			"displayName": "GET /authenticationMethodConfigurations/{authenticationMethodConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Method Configurations Authentication Method Configuration"
					],
					"operation": [
						"Authentication Method Configurations Authentication Method Configuration Get Authentication Method Configuration"
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
						"Authentication Method Configurations Authentication Method Configuration"
					],
					"operation": [
						"Authentication Method Configurations Authentication Method Configuration Get Authentication Method Configuration"
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
						"Authentication Method Configurations Authentication Method Configuration"
					],
					"operation": [
						"Authentication Method Configurations Authentication Method Configuration Get Authentication Method Configuration"
					]
				}
			}
		},
		{
			"displayName": "PATCH /authenticationMethodConfigurations/{authenticationMethodConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Method Configurations Authentication Method Configuration"
					],
					"operation": [
						"Authentication Method Configurations Authentication Method Configuration Update Authentication Method Configuration"
					]
				}
			}
		},
		{
			"displayName": "PATCH /authenticationMethodConfigurations/{authenticationMethodConfiguration-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Method Configurations Authentication Method Configuration"
					],
					"operation": [
						"Authentication Method Configurations Authentication Method Configuration Update Authentication Method Configuration"
					]
				}
			}
		},
];
