import type { INodeProperties } from 'n8n-workflow';

export const permissionGrantsResourceSpecificPermissionGrantDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Permission Grants Resource Specific Permission Grant"
					]
				}
			},
			"options": [
				{
					"name": "Permission Grants Resource Specific Permission Grant List Resource Specific Permission Grant",
					"value": "Permission Grants Resource Specific Permission Grant List Resource Specific Permission Grant",
					"action": "Get entities from permissionGrants",
					"description": "Get entities from permissionGrants",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/permissionGrants"
						}
					}
				},
				{
					"name": "Permission Grants Resource Specific Permission Grant Create Resource Specific Permission Grant",
					"value": "Permission Grants Resource Specific Permission Grant Create Resource Specific Permission Grant",
					"action": "Add new entity to permissionGrants",
					"description": "Add new entity to permissionGrants",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/permissionGrants"
						}
					}
				},
				{
					"name": "Permission Grants Resource Specific Permission Grant Delete Resource Specific Permission Grant",
					"value": "Permission Grants Resource Specific Permission Grant Delete Resource Specific Permission Grant",
					"action": "Delete entity from permissionGrants",
					"description": "Delete entity from permissionGrants",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}"
						}
					}
				},
				{
					"name": "Permission Grants Resource Specific Permission Grant Get Resource Specific Permission Grant",
					"value": "Permission Grants Resource Specific Permission Grant Get Resource Specific Permission Grant",
					"action": "Get entity from permissionGrants by key",
					"description": "Get entity from permissionGrants by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}"
						}
					}
				},
				{
					"name": "Permission Grants Resource Specific Permission Grant Update Resource Specific Permission Grant",
					"value": "Permission Grants Resource Specific Permission Grant Update Resource Specific Permission Grant",
					"action": "Update entity in permissionGrants",
					"description": "Update entity in permissionGrants",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/permissionGrants/{{$parameter[\"resourceSpecificPermissionGrant-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /permissionGrants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Permission Grants Resource Specific Permission Grant"
					],
					"operation": [
						"Permission Grants Resource Specific Permission Grant List Resource Specific Permission Grant"
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
						"Permission Grants Resource Specific Permission Grant"
					],
					"operation": [
						"Permission Grants Resource Specific Permission Grant List Resource Specific Permission Grant"
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
						"Permission Grants Resource Specific Permission Grant"
					],
					"operation": [
						"Permission Grants Resource Specific Permission Grant List Resource Specific Permission Grant"
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
						"Permission Grants Resource Specific Permission Grant"
					],
					"operation": [
						"Permission Grants Resource Specific Permission Grant List Resource Specific Permission Grant"
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
						"Permission Grants Resource Specific Permission Grant"
					],
					"operation": [
						"Permission Grants Resource Specific Permission Grant List Resource Specific Permission Grant"
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
						"Permission Grants Resource Specific Permission Grant"
					],
					"operation": [
						"Permission Grants Resource Specific Permission Grant List Resource Specific Permission Grant"
					]
				}
			}
		},
		{
			"displayName": "POST /permissionGrants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Permission Grants Resource Specific Permission Grant"
					],
					"operation": [
						"Permission Grants Resource Specific Permission Grant Create Resource Specific Permission Grant"
					]
				}
			}
		},
		{
			"displayName": "POST /permissionGrants<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Permission Grants Resource Specific Permission Grant"
					],
					"operation": [
						"Permission Grants Resource Specific Permission Grant Create Resource Specific Permission Grant"
					]
				}
			}
		},
		{
			"displayName": "DELETE /permissionGrants/{resourceSpecificPermissionGrant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Permission Grants Resource Specific Permission Grant"
					],
					"operation": [
						"Permission Grants Resource Specific Permission Grant Delete Resource Specific Permission Grant"
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
						"Permission Grants Resource Specific Permission Grant"
					],
					"operation": [
						"Permission Grants Resource Specific Permission Grant Delete Resource Specific Permission Grant"
					]
				}
			}
		},
		{
			"displayName": "GET /permissionGrants/{resourceSpecificPermissionGrant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Permission Grants Resource Specific Permission Grant"
					],
					"operation": [
						"Permission Grants Resource Specific Permission Grant Get Resource Specific Permission Grant"
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
						"Permission Grants Resource Specific Permission Grant"
					],
					"operation": [
						"Permission Grants Resource Specific Permission Grant Get Resource Specific Permission Grant"
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
						"Permission Grants Resource Specific Permission Grant"
					],
					"operation": [
						"Permission Grants Resource Specific Permission Grant Get Resource Specific Permission Grant"
					]
				}
			}
		},
		{
			"displayName": "PATCH /permissionGrants/{resourceSpecificPermissionGrant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Permission Grants Resource Specific Permission Grant"
					],
					"operation": [
						"Permission Grants Resource Specific Permission Grant Update Resource Specific Permission Grant"
					]
				}
			}
		},
		{
			"displayName": "PATCH /permissionGrants/{resourceSpecificPermissionGrant-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Permission Grants Resource Specific Permission Grant"
					],
					"operation": [
						"Permission Grants Resource Specific Permission Grant Update Resource Specific Permission Grant"
					]
				}
			}
		},
];
