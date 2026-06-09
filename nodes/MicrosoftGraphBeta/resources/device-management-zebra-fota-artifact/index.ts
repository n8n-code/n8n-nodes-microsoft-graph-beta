import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementZebraFotaArtifactDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Zebra Fota Artifact"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Zebra Fota Artifacts",
					"value": "Device Management List Zebra Fota Artifacts",
					"action": "Get zebraFotaArtifacts from deviceManagement",
					"description": "The Collection of ZebraFotaArtifacts.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/zebraFotaArtifacts"
						}
					}
				},
				{
					"name": "Device Management Create Zebra Fota Artifacts",
					"value": "Device Management Create Zebra Fota Artifacts",
					"action": "Create new navigation property to zebraFotaArtifacts for deviceManagement",
					"description": "Create new navigation property to zebraFotaArtifacts for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/zebraFotaArtifacts"
						}
					}
				},
				{
					"name": "Device Management Delete Zebra Fota Artifacts",
					"value": "Device Management Delete Zebra Fota Artifacts",
					"action": "Delete navigation property zebraFotaArtifacts for deviceManagement",
					"description": "Delete navigation property zebraFotaArtifacts for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/zebraFotaArtifacts/{{$parameter[\"zebraFotaArtifact-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Zebra Fota Artifacts",
					"value": "Device Management Get Zebra Fota Artifacts",
					"action": "Get zebraFotaArtifacts from deviceManagement",
					"description": "The Collection of ZebraFotaArtifacts.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/zebraFotaArtifacts/{{$parameter[\"zebraFotaArtifact-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Zebra Fota Artifacts",
					"value": "Device Management Update Zebra Fota Artifacts",
					"action": "Update the navigation property zebraFotaArtifacts in deviceManagement",
					"description": "Update the navigation property zebraFotaArtifacts in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/zebraFotaArtifacts/{{$parameter[\"zebraFotaArtifact-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/zebraFotaArtifacts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Zebra Fota Artifact"
					],
					"operation": [
						"Device Management List Zebra Fota Artifacts"
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
						"Device Management Zebra Fota Artifact"
					],
					"operation": [
						"Device Management List Zebra Fota Artifacts"
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
						"Device Management Zebra Fota Artifact"
					],
					"operation": [
						"Device Management List Zebra Fota Artifacts"
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
						"Device Management Zebra Fota Artifact"
					],
					"operation": [
						"Device Management List Zebra Fota Artifacts"
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
						"Device Management Zebra Fota Artifact"
					],
					"operation": [
						"Device Management List Zebra Fota Artifacts"
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
						"Device Management Zebra Fota Artifact"
					],
					"operation": [
						"Device Management List Zebra Fota Artifacts"
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
						"Device Management Zebra Fota Artifact"
					],
					"operation": [
						"Device Management List Zebra Fota Artifacts"
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
						"Device Management Zebra Fota Artifact"
					],
					"operation": [
						"Device Management List Zebra Fota Artifacts"
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
						"Device Management Zebra Fota Artifact"
					],
					"operation": [
						"Device Management List Zebra Fota Artifacts"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/zebraFotaArtifacts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Zebra Fota Artifact"
					],
					"operation": [
						"Device Management Create Zebra Fota Artifacts"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/zebraFotaArtifacts<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Zebra Fota Artifact"
					],
					"operation": [
						"Device Management Create Zebra Fota Artifacts"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Zebra Fota Artifact"
					],
					"operation": [
						"Device Management Delete Zebra Fota Artifacts"
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
						"Device Management Zebra Fota Artifact"
					],
					"operation": [
						"Device Management Delete Zebra Fota Artifacts"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Zebra Fota Artifact"
					],
					"operation": [
						"Device Management Get Zebra Fota Artifacts"
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
						"Device Management Zebra Fota Artifact"
					],
					"operation": [
						"Device Management Get Zebra Fota Artifacts"
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
						"Device Management Zebra Fota Artifact"
					],
					"operation": [
						"Device Management Get Zebra Fota Artifacts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Zebra Fota Artifact"
					],
					"operation": [
						"Device Management Update Zebra Fota Artifacts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/zebraFotaArtifacts/{zebraFotaArtifact-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Zebra Fota Artifact"
					],
					"operation": [
						"Device Management Update Zebra Fota Artifacts"
					]
				}
			}
		},
];
