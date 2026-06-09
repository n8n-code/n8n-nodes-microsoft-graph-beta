import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementZebraFotaDeploymentDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Zebra Fota Deployment"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Zebra Fota Deployments",
					"value": "Device Management List Zebra Fota Deployments",
					"action": "Get zebraFotaDeployments from deviceManagement",
					"description": "Collection of ZebraFotaDeployments associated with account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/zebraFotaDeployments"
						}
					}
				},
				{
					"name": "Device Management Create Zebra Fota Deployments",
					"value": "Device Management Create Zebra Fota Deployments",
					"action": "Create new navigation property to zebraFotaDeployments for deviceManagement",
					"description": "Create new navigation property to zebraFotaDeployments for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/zebraFotaDeployments"
						}
					}
				},
				{
					"name": "Device Management Delete Zebra Fota Deployments",
					"value": "Device Management Delete Zebra Fota Deployments",
					"action": "Delete navigation property zebraFotaDeployments for deviceManagement",
					"description": "Delete navigation property zebraFotaDeployments for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/zebraFotaDeployments/{{$parameter[\"zebraFotaDeployment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Zebra Fota Deployments",
					"value": "Device Management Get Zebra Fota Deployments",
					"action": "Get zebraFotaDeployments from deviceManagement",
					"description": "Collection of ZebraFotaDeployments associated with account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/zebraFotaDeployments/{{$parameter[\"zebraFotaDeployment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Zebra Fota Deployments",
					"value": "Device Management Update Zebra Fota Deployments",
					"action": "Update the navigation property zebraFotaDeployments in deviceManagement",
					"description": "Update the navigation property zebraFotaDeployments in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/zebraFotaDeployments/{{$parameter[\"zebraFotaDeployment-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/zebraFotaDeployments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Zebra Fota Deployment"
					],
					"operation": [
						"Device Management List Zebra Fota Deployments"
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
						"Device Management Zebra Fota Deployment"
					],
					"operation": [
						"Device Management List Zebra Fota Deployments"
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
						"Device Management Zebra Fota Deployment"
					],
					"operation": [
						"Device Management List Zebra Fota Deployments"
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
						"Device Management Zebra Fota Deployment"
					],
					"operation": [
						"Device Management List Zebra Fota Deployments"
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
						"Device Management Zebra Fota Deployment"
					],
					"operation": [
						"Device Management List Zebra Fota Deployments"
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
						"Device Management Zebra Fota Deployment"
					],
					"operation": [
						"Device Management List Zebra Fota Deployments"
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
						"Device Management Zebra Fota Deployment"
					],
					"operation": [
						"Device Management List Zebra Fota Deployments"
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
						"Device Management Zebra Fota Deployment"
					],
					"operation": [
						"Device Management List Zebra Fota Deployments"
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
						"Device Management Zebra Fota Deployment"
					],
					"operation": [
						"Device Management List Zebra Fota Deployments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/zebraFotaDeployments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Zebra Fota Deployment"
					],
					"operation": [
						"Device Management Create Zebra Fota Deployments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/zebraFotaDeployments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Zebra Fota Deployment"
					],
					"operation": [
						"Device Management Create Zebra Fota Deployments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Zebra Fota Deployment"
					],
					"operation": [
						"Device Management Delete Zebra Fota Deployments"
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
						"Device Management Zebra Fota Deployment"
					],
					"operation": [
						"Device Management Delete Zebra Fota Deployments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Zebra Fota Deployment"
					],
					"operation": [
						"Device Management Get Zebra Fota Deployments"
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
						"Device Management Zebra Fota Deployment"
					],
					"operation": [
						"Device Management Get Zebra Fota Deployments"
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
						"Device Management Zebra Fota Deployment"
					],
					"operation": [
						"Device Management Get Zebra Fota Deployments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Zebra Fota Deployment"
					],
					"operation": [
						"Device Management Update Zebra Fota Deployments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/zebraFotaDeployments/{zebraFotaDeployment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Zebra Fota Deployment"
					],
					"operation": [
						"Device Management Update Zebra Fota Deployments"
					]
				}
			}
		},
];
