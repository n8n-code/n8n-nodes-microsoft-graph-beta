import type { INodeProperties } from 'n8n-workflow';

export const agreementsAgreementDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement"
					]
				}
			},
			"options": [
				{
					"name": "Agreements Agreement List Agreement",
					"value": "Agreements Agreement List Agreement",
					"action": "Get entities from agreements",
					"description": "Get entities from agreements",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/agreements"
						}
					}
				},
				{
					"name": "Agreements Agreement Create Agreement",
					"value": "Agreements Agreement Create Agreement",
					"action": "Add new entity to agreements",
					"description": "Add new entity to agreements",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/agreements"
						}
					}
				},
				{
					"name": "Agreements Agreement Delete Agreement",
					"value": "Agreements Agreement Delete Agreement",
					"action": "Delete entity from agreements",
					"description": "Delete entity from agreements",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}"
						}
					}
				},
				{
					"name": "Agreements Agreement Get Agreement",
					"value": "Agreements Agreement Get Agreement",
					"action": "Get entity from agreements by key",
					"description": "Get entity from agreements by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}"
						}
					}
				},
				{
					"name": "Agreements Agreement Update Agreement",
					"value": "Agreements Agreement Update Agreement",
					"action": "Update entity in agreements",
					"description": "Update entity in agreements",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /agreements",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement"
					],
					"operation": [
						"Agreements Agreement List Agreement"
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
						"Agreements Agreement"
					],
					"operation": [
						"Agreements Agreement List Agreement"
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
						"Agreements Agreement"
					],
					"operation": [
						"Agreements Agreement List Agreement"
					]
				}
			}
		},
		{
			"displayName": "POST /agreements",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement"
					],
					"operation": [
						"Agreements Agreement Create Agreement"
					]
				}
			}
		},
		{
			"displayName": "POST /agreements<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement"
					],
					"operation": [
						"Agreements Agreement Create Agreement"
					]
				}
			}
		},
		{
			"displayName": "DELETE /agreements/{agreement-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement"
					],
					"operation": [
						"Agreements Agreement Delete Agreement"
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
						"Agreements Agreement"
					],
					"operation": [
						"Agreements Agreement Delete Agreement"
					]
				}
			}
		},
		{
			"displayName": "GET /agreements/{agreement-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement"
					],
					"operation": [
						"Agreements Agreement Get Agreement"
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
						"Agreements Agreement"
					],
					"operation": [
						"Agreements Agreement Get Agreement"
					]
				}
			}
		},
		{
			"displayName": "PATCH /agreements/{agreement-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement"
					],
					"operation": [
						"Agreements Agreement Update Agreement"
					]
				}
			}
		},
		{
			"displayName": "PATCH /agreements/{agreement-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement"
					],
					"operation": [
						"Agreements Agreement Update Agreement"
					]
				}
			}
		},
];
