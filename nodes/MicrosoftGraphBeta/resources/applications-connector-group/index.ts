import type { INodeProperties } from 'n8n-workflow';

export const applicationsConnectorGroupDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Connector Group"
					]
				}
			},
			"options": [
				{
					"name": "Applications Get Connector Group",
					"value": "Applications Get Connector Group",
					"action": "Get connectorGroup from applications",
					"description": "The connectorGroup the application is using with Azure AD Application Proxy. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/connectorGroup"
						}
					}
				},
				{
					"name": "Applications Delete Ref Connector Group",
					"value": "Applications Delete Ref Connector Group",
					"action": "Delete ref of navigation property connectorGroup for applications",
					"description": "Delete ref of navigation property connectorGroup for applications",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/connectorGroup/$ref"
						}
					}
				},
				{
					"name": "Applications Get Ref Connector Group",
					"value": "Applications Get Ref Connector Group",
					"action": "Get ref of connectorGroup from applications",
					"description": "The connectorGroup the application is using with Azure AD Application Proxy. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/connectorGroup/$ref"
						}
					}
				},
				{
					"name": "Applications Update Ref Connector Group",
					"value": "Applications Update Ref Connector Group",
					"action": "Update the ref of navigation property connectorGroup in applications",
					"description": "Update the ref of navigation property connectorGroup in applications",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/connectorGroup/$ref"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /applications/{application-id}/connectorGroup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Connector Group"
					],
					"operation": [
						"Applications Get Connector Group"
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
						"Applications Connector Group"
					],
					"operation": [
						"Applications Get Connector Group"
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
						"Applications Connector Group"
					],
					"operation": [
						"Applications Get Connector Group"
					]
				}
			}
		},
		{
			"displayName": "DELETE /applications/{application-id}/connectorGroup/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Connector Group"
					],
					"operation": [
						"Applications Delete Ref Connector Group"
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
						"Applications Connector Group"
					],
					"operation": [
						"Applications Delete Ref Connector Group"
					]
				}
			}
		},
		{
			"displayName": "GET /applications/{application-id}/connectorGroup/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Connector Group"
					],
					"operation": [
						"Applications Get Ref Connector Group"
					]
				}
			}
		},
		{
			"displayName": "PUT /applications/{application-id}/connectorGroup/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Connector Group"
					],
					"operation": [
						"Applications Update Ref Connector Group"
					]
				}
			}
		},
		{
			"displayName": "Odata Id",
			"name": "@odata-id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Connector Group"
					],
					"operation": [
						"Applications Update Ref Connector Group"
					]
				}
			}
		},
		{
			"displayName": "Odata Type",
			"name": "@odata-type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Connector Group"
					],
					"operation": [
						"Applications Update Ref Connector Group"
					]
				}
			}
		},
];
