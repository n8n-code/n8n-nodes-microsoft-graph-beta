import type { INodeProperties } from 'n8n-workflow';

export const identityIdentityApiConnectorDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity API Connector"
					]
				}
			},
			"options": [
				{
					"name": "Identity List API Connectors",
					"value": "Identity List API Connectors",
					"action": "List identityApiConnectors",
					"description": "Read the properties of an identityApiConnector object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/apiConnectors"
						}
					}
				},
				{
					"name": "Identity Create API Connectors",
					"value": "Identity Create API Connectors",
					"action": "Create identityApiConnector",
					"description": "Create a new identityApiConnector object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identity/apiConnectors"
						}
					}
				},
				{
					"name": "Identity Delete API Connectors",
					"value": "Identity Delete API Connectors",
					"action": "Delete navigation property apiConnectors for identity",
					"description": "Delete navigation property apiConnectors for identity",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identity/apiConnectors/{{$parameter[\"identityApiConnector-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Get API Connectors",
					"value": "Identity Get API Connectors",
					"action": "Get apiConnectors from identity",
					"description": "Represents entry point for API connectors.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/apiConnectors/{{$parameter[\"identityApiConnector-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Update API Connectors",
					"value": "Identity Update API Connectors",
					"action": "Update the navigation property apiConnectors in identity",
					"description": "Update the navigation property apiConnectors in identity",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identity/apiConnectors/{{$parameter[\"identityApiConnector-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /identity/apiConnectors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity API Connector"
					],
					"operation": [
						"Identity List API Connectors"
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
						"Identity Identity API Connector"
					],
					"operation": [
						"Identity List API Connectors"
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
						"Identity Identity API Connector"
					],
					"operation": [
						"Identity List API Connectors"
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
						"Identity Identity API Connector"
					],
					"operation": [
						"Identity List API Connectors"
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
						"Identity Identity API Connector"
					],
					"operation": [
						"Identity List API Connectors"
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
						"Identity Identity API Connector"
					],
					"operation": [
						"Identity List API Connectors"
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
						"Identity Identity API Connector"
					],
					"operation": [
						"Identity List API Connectors"
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
						"Identity Identity API Connector"
					],
					"operation": [
						"Identity List API Connectors"
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
						"Identity Identity API Connector"
					],
					"operation": [
						"Identity List API Connectors"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/apiConnectors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity API Connector"
					],
					"operation": [
						"Identity Create API Connectors"
					]
				}
			}
		},
		{
			"displayName": "POST /identity/apiConnectors<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity API Connector"
					],
					"operation": [
						"Identity Create API Connectors"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identity/apiConnectors/{identityApiConnector-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity API Connector"
					],
					"operation": [
						"Identity Delete API Connectors"
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
						"Identity Identity API Connector"
					],
					"operation": [
						"Identity Delete API Connectors"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/apiConnectors/{identityApiConnector-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity API Connector"
					],
					"operation": [
						"Identity Get API Connectors"
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
						"Identity Identity API Connector"
					],
					"operation": [
						"Identity Get API Connectors"
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
						"Identity Identity API Connector"
					],
					"operation": [
						"Identity Get API Connectors"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/apiConnectors/{identityApiConnector-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity API Connector"
					],
					"operation": [
						"Identity Update API Connectors"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identity/apiConnectors/{identityApiConnector-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Identity API Connector"
					],
					"operation": [
						"Identity Update API Connectors"
					]
				}
			}
		},
];
