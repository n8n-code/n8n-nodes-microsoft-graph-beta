import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementUserPfxCertificateDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User PFX Certificate"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List User Pfx Certificates",
					"value": "Device Management List User Pfx Certificates",
					"action": "Get userPfxCertificates from deviceManagement",
					"description": "Collection of PFX certificates associated with a user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userPfxCertificates"
						}
					}
				},
				{
					"name": "Device Management Create User Pfx Certificates",
					"value": "Device Management Create User Pfx Certificates",
					"action": "Create new navigation property to userPfxCertificates for deviceManagement",
					"description": "Create new navigation property to userPfxCertificates for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/userPfxCertificates"
						}
					}
				},
				{
					"name": "Device Management Delete User Pfx Certificates",
					"value": "Device Management Delete User Pfx Certificates",
					"action": "Delete navigation property userPfxCertificates for deviceManagement",
					"description": "Delete navigation property userPfxCertificates for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userPfxCertificates/{{$parameter[\"userPFXCertificate-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get User Pfx Certificates",
					"value": "Device Management Get User Pfx Certificates",
					"action": "Get userPfxCertificates from deviceManagement",
					"description": "Collection of PFX certificates associated with a user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userPfxCertificates/{{$parameter[\"userPFXCertificate-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update User Pfx Certificates",
					"value": "Device Management Update User Pfx Certificates",
					"action": "Update the navigation property userPfxCertificates in deviceManagement",
					"description": "Update the navigation property userPfxCertificates in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userPfxCertificates/{{$parameter[\"userPFXCertificate-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/userPfxCertificates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User PFX Certificate"
					],
					"operation": [
						"Device Management List User Pfx Certificates"
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
						"Device Management User PFX Certificate"
					],
					"operation": [
						"Device Management List User Pfx Certificates"
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
						"Device Management User PFX Certificate"
					],
					"operation": [
						"Device Management List User Pfx Certificates"
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
						"Device Management User PFX Certificate"
					],
					"operation": [
						"Device Management List User Pfx Certificates"
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
						"Device Management User PFX Certificate"
					],
					"operation": [
						"Device Management List User Pfx Certificates"
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
						"Device Management User PFX Certificate"
					],
					"operation": [
						"Device Management List User Pfx Certificates"
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
						"Device Management User PFX Certificate"
					],
					"operation": [
						"Device Management List User Pfx Certificates"
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
						"Device Management User PFX Certificate"
					],
					"operation": [
						"Device Management List User Pfx Certificates"
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
						"Device Management User PFX Certificate"
					],
					"operation": [
						"Device Management List User Pfx Certificates"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userPfxCertificates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User PFX Certificate"
					],
					"operation": [
						"Device Management Create User Pfx Certificates"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/userPfxCertificates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User PFX Certificate"
					],
					"operation": [
						"Device Management Create User Pfx Certificates"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/userPfxCertificates/{userPFXCertificate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User PFX Certificate"
					],
					"operation": [
						"Device Management Delete User Pfx Certificates"
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
						"Device Management User PFX Certificate"
					],
					"operation": [
						"Device Management Delete User Pfx Certificates"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userPfxCertificates/{userPFXCertificate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User PFX Certificate"
					],
					"operation": [
						"Device Management Get User Pfx Certificates"
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
						"Device Management User PFX Certificate"
					],
					"operation": [
						"Device Management Get User Pfx Certificates"
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
						"Device Management User PFX Certificate"
					],
					"operation": [
						"Device Management Get User Pfx Certificates"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userPfxCertificates/{userPFXCertificate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User PFX Certificate"
					],
					"operation": [
						"Device Management Update User Pfx Certificates"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userPfxCertificates/{userPFXCertificate-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User PFX Certificate"
					],
					"operation": [
						"Device Management Update User Pfx Certificates"
					]
				}
			}
		},
];
