import type { INodeProperties } from 'n8n-workflow';

export const subscribedSkusSubscribedSkuDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Subscribed Skus Subscribed Sku"
					]
				}
			},
			"options": [
				{
					"name": "Subscribed Skus Subscribed Sku List Subscribed Sku",
					"value": "Subscribed Skus Subscribed Sku List Subscribed Sku",
					"action": "List subscribedSkus",
					"description": "Get the list of commercial subscriptions that an organization has acquired. For the mapping of license names as displayed on the Azure portal or the Microsoft 365 admin center against their Microsoft Graph **skuId** and **skuPartNumber** properties, see Product names and service plan identifiers for licensing.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/subscribedSkus"
						}
					}
				},
				{
					"name": "Subscribed Skus Subscribed Sku Create Subscribed Sku",
					"value": "Subscribed Skus Subscribed Sku Create Subscribed Sku",
					"action": "Add new entity to subscribedSkus",
					"description": "Add new entity to subscribedSkus",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/subscribedSkus"
						}
					}
				},
				{
					"name": "Subscribed Skus Subscribed Sku Delete Subscribed Sku",
					"value": "Subscribed Skus Subscribed Sku Delete Subscribed Sku",
					"action": "Delete entity from subscribedSkus",
					"description": "Delete entity from subscribedSkus",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/subscribedSkus/{{$parameter[\"subscribedSku-id\"]}}"
						}
					}
				},
				{
					"name": "Subscribed Skus Subscribed Sku Get Subscribed Sku",
					"value": "Subscribed Skus Subscribed Sku Get Subscribed Sku",
					"action": "Get subscribedSku",
					"description": "Get a specific commercial subscription that an organization has acquired.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/subscribedSkus/{{$parameter[\"subscribedSku-id\"]}}"
						}
					}
				},
				{
					"name": "Subscribed Skus Subscribed Sku Update Subscribed Sku",
					"value": "Subscribed Skus Subscribed Sku Update Subscribed Sku",
					"action": "Update entity in subscribedSkus",
					"description": "Update entity in subscribedSkus",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/subscribedSkus/{{$parameter[\"subscribedSku-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /subscribedSkus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscribed Skus Subscribed Sku"
					],
					"operation": [
						"Subscribed Skus Subscribed Sku List Subscribed Sku"
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
						"Subscribed Skus Subscribed Sku"
					],
					"operation": [
						"Subscribed Skus Subscribed Sku List Subscribed Sku"
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
						"Subscribed Skus Subscribed Sku"
					],
					"operation": [
						"Subscribed Skus Subscribed Sku List Subscribed Sku"
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
						"Subscribed Skus Subscribed Sku"
					],
					"operation": [
						"Subscribed Skus Subscribed Sku List Subscribed Sku"
					]
				}
			}
		},
		{
			"displayName": "POST /subscribedSkus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscribed Skus Subscribed Sku"
					],
					"operation": [
						"Subscribed Skus Subscribed Sku Create Subscribed Sku"
					]
				}
			}
		},
		{
			"displayName": "POST /subscribedSkus<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscribed Skus Subscribed Sku"
					],
					"operation": [
						"Subscribed Skus Subscribed Sku Create Subscribed Sku"
					]
				}
			}
		},
		{
			"displayName": "DELETE /subscribedSkus/{subscribedSku-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscribed Skus Subscribed Sku"
					],
					"operation": [
						"Subscribed Skus Subscribed Sku Delete Subscribed Sku"
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
						"Subscribed Skus Subscribed Sku"
					],
					"operation": [
						"Subscribed Skus Subscribed Sku Delete Subscribed Sku"
					]
				}
			}
		},
		{
			"displayName": "GET /subscribedSkus/{subscribedSku-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscribed Skus Subscribed Sku"
					],
					"operation": [
						"Subscribed Skus Subscribed Sku Get Subscribed Sku"
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
						"Subscribed Skus Subscribed Sku"
					],
					"operation": [
						"Subscribed Skus Subscribed Sku Get Subscribed Sku"
					]
				}
			}
		},
		{
			"displayName": "PATCH /subscribedSkus/{subscribedSku-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscribed Skus Subscribed Sku"
					],
					"operation": [
						"Subscribed Skus Subscribed Sku Update Subscribed Sku"
					]
				}
			}
		},
		{
			"displayName": "PATCH /subscribedSkus/{subscribedSku-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscribed Skus Subscribed Sku"
					],
					"operation": [
						"Subscribed Skus Subscribed Sku Update Subscribed Sku"
					]
				}
			}
		},
];
