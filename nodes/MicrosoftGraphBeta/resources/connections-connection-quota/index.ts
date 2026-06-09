import type { INodeProperties } from 'n8n-workflow';

export const connectionsConnectionQuotaDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Connections Connection Quota"
					]
				}
			},
			"options": [
				{
					"name": "Connections Delete Quota",
					"value": "Connections Delete Quota",
					"action": "Delete navigation property quota for connections",
					"description": "Delete navigation property quota for connections",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/quota"
						}
					}
				},
				{
					"name": "Connections Get Quota",
					"value": "Connections Get Quota",
					"action": "Get connectionQuota",
					"description": "Retrieve the properties and relationships of a connectionQuota object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/quota"
						}
					}
				},
				{
					"name": "Connections Update Quota",
					"value": "Connections Update Quota",
					"action": "Update the navigation property quota in connections",
					"description": "Update the navigation property quota in connections",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/quota"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /connections/{externalConnection-id}/quota",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections Connection Quota"
					],
					"operation": [
						"Connections Delete Quota"
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
						"Connections Connection Quota"
					],
					"operation": [
						"Connections Delete Quota"
					]
				}
			}
		},
		{
			"displayName": "GET /connections/{externalConnection-id}/quota",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections Connection Quota"
					],
					"operation": [
						"Connections Get Quota"
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
						"Connections Connection Quota"
					],
					"operation": [
						"Connections Get Quota"
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
						"Connections Connection Quota"
					],
					"operation": [
						"Connections Get Quota"
					]
				}
			}
		},
		{
			"displayName": "PATCH /connections/{externalConnection-id}/quota",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections Connection Quota"
					],
					"operation": [
						"Connections Update Quota"
					]
				}
			}
		},
		{
			"displayName": "PATCH /connections/{externalConnection-id}/quota<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections Connection Quota"
					],
					"operation": [
						"Connections Update Quota"
					]
				}
			}
		},
];
