import type { INodeProperties } from 'n8n-workflow';

export const deviceAppManagementEnterpriseCodeSigningCertificateDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Enterprise Code Signing Certificate"
					]
				}
			},
			"options": [
				{
					"name": "Device App Management List Enterprise Code Signing Certificates",
					"value": "Device App Management List Enterprise Code Signing Certificates",
					"action": "Get enterpriseCodeSigningCertificates from deviceAppManagement",
					"description": "The Windows Enterprise Code Signing Certificate.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/enterpriseCodeSigningCertificates"
						}
					}
				},
				{
					"name": "Device App Management Create Enterprise Code Signing Certificates",
					"value": "Device App Management Create Enterprise Code Signing Certificates",
					"action": "Create new navigation property to enterpriseCodeSigningCertificates for deviceAppManagement",
					"description": "Create new navigation property to enterpriseCodeSigningCertificates for deviceAppManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceAppManagement/enterpriseCodeSigningCertificates"
						}
					}
				},
				{
					"name": "Device App Management Delete Enterprise Code Signing Certificates",
					"value": "Device App Management Delete Enterprise Code Signing Certificates",
					"action": "Delete navigation property enterpriseCodeSigningCertificates for deviceAppManagement",
					"description": "Delete navigation property enterpriseCodeSigningCertificates for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/enterpriseCodeSigningCertificates/{{$parameter[\"enterpriseCodeSigningCertificate-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Get Enterprise Code Signing Certificates",
					"value": "Device App Management Get Enterprise Code Signing Certificates",
					"action": "Get enterpriseCodeSigningCertificates from deviceAppManagement",
					"description": "The Windows Enterprise Code Signing Certificate.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/enterpriseCodeSigningCertificates/{{$parameter[\"enterpriseCodeSigningCertificate-id\"]}}"
						}
					}
				},
				{
					"name": "Device App Management Update Enterprise Code Signing Certificates",
					"value": "Device App Management Update Enterprise Code Signing Certificates",
					"action": "Update the navigation property enterpriseCodeSigningCertificates in deviceAppManagement",
					"description": "Update the navigation property enterpriseCodeSigningCertificates in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/enterpriseCodeSigningCertificates/{{$parameter[\"enterpriseCodeSigningCertificate-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceAppManagement/enterpriseCodeSigningCertificates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Enterprise Code Signing Certificate"
					],
					"operation": [
						"Device App Management List Enterprise Code Signing Certificates"
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
						"Device App Management Enterprise Code Signing Certificate"
					],
					"operation": [
						"Device App Management List Enterprise Code Signing Certificates"
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
						"Device App Management Enterprise Code Signing Certificate"
					],
					"operation": [
						"Device App Management List Enterprise Code Signing Certificates"
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
						"Device App Management Enterprise Code Signing Certificate"
					],
					"operation": [
						"Device App Management List Enterprise Code Signing Certificates"
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
						"Device App Management Enterprise Code Signing Certificate"
					],
					"operation": [
						"Device App Management List Enterprise Code Signing Certificates"
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
						"Device App Management Enterprise Code Signing Certificate"
					],
					"operation": [
						"Device App Management List Enterprise Code Signing Certificates"
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
						"Device App Management Enterprise Code Signing Certificate"
					],
					"operation": [
						"Device App Management List Enterprise Code Signing Certificates"
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
						"Device App Management Enterprise Code Signing Certificate"
					],
					"operation": [
						"Device App Management List Enterprise Code Signing Certificates"
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
						"Device App Management Enterprise Code Signing Certificate"
					],
					"operation": [
						"Device App Management List Enterprise Code Signing Certificates"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/enterpriseCodeSigningCertificates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Enterprise Code Signing Certificate"
					],
					"operation": [
						"Device App Management Create Enterprise Code Signing Certificates"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceAppManagement/enterpriseCodeSigningCertificates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Enterprise Code Signing Certificate"
					],
					"operation": [
						"Device App Management Create Enterprise Code Signing Certificates"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Enterprise Code Signing Certificate"
					],
					"operation": [
						"Device App Management Delete Enterprise Code Signing Certificates"
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
						"Device App Management Enterprise Code Signing Certificate"
					],
					"operation": [
						"Device App Management Delete Enterprise Code Signing Certificates"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Enterprise Code Signing Certificate"
					],
					"operation": [
						"Device App Management Get Enterprise Code Signing Certificates"
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
						"Device App Management Enterprise Code Signing Certificate"
					],
					"operation": [
						"Device App Management Get Enterprise Code Signing Certificates"
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
						"Device App Management Enterprise Code Signing Certificate"
					],
					"operation": [
						"Device App Management Get Enterprise Code Signing Certificates"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Enterprise Code Signing Certificate"
					],
					"operation": [
						"Device App Management Update Enterprise Code Signing Certificates"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/enterpriseCodeSigningCertificates/{enterpriseCodeSigningCertificate-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Enterprise Code Signing Certificate"
					],
					"operation": [
						"Device App Management Update Enterprise Code Signing Certificates"
					]
				}
			}
		},
];
