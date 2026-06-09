import type { INodeProperties } from 'n8n-workflow';

export const directoryCustomSecurityAttributeDefinitionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Custom Security Attribute Definition"
					]
				}
			},
			"options": [
				{
					"name": "Directory List Custom Security Attribute Definitions",
					"value": "Directory List Custom Security Attribute Definitions",
					"action": "List customSecurityAttributeDefinitions",
					"description": "Get a list of the customSecurityAttributeDefinition objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/customSecurityAttributeDefinitions"
						}
					}
				},
				{
					"name": "Directory Create Custom Security Attribute Definitions",
					"value": "Directory Create Custom Security Attribute Definitions",
					"action": "Create customSecurityAttributeDefinition",
					"description": "Create a new customSecurityAttributeDefinition object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/customSecurityAttributeDefinitions"
						}
					}
				},
				{
					"name": "Directory Delete Custom Security Attribute Definitions",
					"value": "Directory Delete Custom Security Attribute Definitions",
					"action": "Delete navigation property customSecurityAttributeDefinitions for directory",
					"description": "Delete navigation property customSecurityAttributeDefinitions for directory",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/directory/customSecurityAttributeDefinitions/{{$parameter[\"customSecurityAttributeDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Get Custom Security Attribute Definitions",
					"value": "Directory Get Custom Security Attribute Definitions",
					"action": "Get customSecurityAttributeDefinitions from directory",
					"description": "Schema of a custom security attributes (key-value pairs).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/customSecurityAttributeDefinitions/{{$parameter[\"customSecurityAttributeDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Update Custom Security Attribute Definitions",
					"value": "Directory Update Custom Security Attribute Definitions",
					"action": "Update the navigation property customSecurityAttributeDefinitions in directory",
					"description": "Update the navigation property customSecurityAttributeDefinitions in directory",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/directory/customSecurityAttributeDefinitions/{{$parameter[\"customSecurityAttributeDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Custom Security Attribute Definitions List Allowed Values",
					"value": "Directory Custom Security Attribute Definitions List Allowed Values",
					"action": "List allowedValues",
					"description": "Get a list of the allowedValue objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/customSecurityAttributeDefinitions/{{$parameter[\"customSecurityAttributeDefinition-id\"]}}/allowedValues"
						}
					}
				},
				{
					"name": "Directory Custom Security Attribute Definitions Create Allowed Values",
					"value": "Directory Custom Security Attribute Definitions Create Allowed Values",
					"action": "Create allowedValue",
					"description": "Create a new allowedValue object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/directory/customSecurityAttributeDefinitions/{{$parameter[\"customSecurityAttributeDefinition-id\"]}}/allowedValues"
						}
					}
				},
				{
					"name": "Directory Custom Security Attribute Definitions Delete Allowed Values",
					"value": "Directory Custom Security Attribute Definitions Delete Allowed Values",
					"action": "Delete navigation property allowedValues for directory",
					"description": "Delete navigation property allowedValues for directory",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/directory/customSecurityAttributeDefinitions/{{$parameter[\"customSecurityAttributeDefinition-id\"]}}/allowedValues/{{$parameter[\"allowedValue-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Custom Security Attribute Definitions Get Allowed Values",
					"value": "Directory Custom Security Attribute Definitions Get Allowed Values",
					"action": "Get allowedValues from directory",
					"description": "Values that are predefined for this custom security attribute.This navigation property is not returned by default and must be specified in an $expand query. For example, /directory/customSecurityAttributeDefinitions?$expand=allowedValues.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory/customSecurityAttributeDefinitions/{{$parameter[\"customSecurityAttributeDefinition-id\"]}}/allowedValues/{{$parameter[\"allowedValue-id\"]}}"
						}
					}
				},
				{
					"name": "Directory Custom Security Attribute Definitions Update Allowed Values",
					"value": "Directory Custom Security Attribute Definitions Update Allowed Values",
					"action": "Update the navigation property allowedValues in directory",
					"description": "Update the navigation property allowedValues in directory",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/directory/customSecurityAttributeDefinitions/{{$parameter[\"customSecurityAttributeDefinition-id\"]}}/allowedValues/{{$parameter[\"allowedValue-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /directory/customSecurityAttributeDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory List Custom Security Attribute Definitions"
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
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory List Custom Security Attribute Definitions"
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
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory List Custom Security Attribute Definitions"
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
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory List Custom Security Attribute Definitions"
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
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory List Custom Security Attribute Definitions"
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
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory List Custom Security Attribute Definitions"
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
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory List Custom Security Attribute Definitions"
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
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory List Custom Security Attribute Definitions"
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
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory List Custom Security Attribute Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/customSecurityAttributeDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory Create Custom Security Attribute Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/customSecurityAttributeDefinitions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory Create Custom Security Attribute Definitions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory Delete Custom Security Attribute Definitions"
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
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory Delete Custom Security Attribute Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory Get Custom Security Attribute Definitions"
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
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory Get Custom Security Attribute Definitions"
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
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory Get Custom Security Attribute Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory Update Custom Security Attribute Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory Update Custom Security Attribute Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory Custom Security Attribute Definitions List Allowed Values"
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
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory Custom Security Attribute Definitions List Allowed Values"
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
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory Custom Security Attribute Definitions List Allowed Values"
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
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory Custom Security Attribute Definitions List Allowed Values"
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
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory Custom Security Attribute Definitions List Allowed Values"
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
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory Custom Security Attribute Definitions List Allowed Values"
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
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory Custom Security Attribute Definitions List Allowed Values"
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
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory Custom Security Attribute Definitions List Allowed Values"
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
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory Custom Security Attribute Definitions List Allowed Values"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory Custom Security Attribute Definitions Create Allowed Values"
					]
				}
			}
		},
		{
			"displayName": "POST /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory Custom Security Attribute Definitions Create Allowed Values"
					]
				}
			}
		},
		{
			"displayName": "DELETE /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory Custom Security Attribute Definitions Delete Allowed Values"
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
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory Custom Security Attribute Definitions Delete Allowed Values"
					]
				}
			}
		},
		{
			"displayName": "GET /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory Custom Security Attribute Definitions Get Allowed Values"
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
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory Custom Security Attribute Definitions Get Allowed Values"
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
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory Custom Security Attribute Definitions Get Allowed Values"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory Custom Security Attribute Definitions Update Allowed Values"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition-id}/allowedValues/{allowedValue-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Custom Security Attribute Definition"
					],
					"operation": [
						"Directory Custom Security Attribute Definitions Update Allowed Values"
					]
				}
			}
		},
];
