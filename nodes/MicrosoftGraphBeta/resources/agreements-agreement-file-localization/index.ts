import type { INodeProperties } from 'n8n-workflow';

export const agreementsAgreementFileLocalizationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File Localization"
					]
				}
			},
			"options": [
				{
					"name": "Agreements List Files",
					"value": "Agreements List Files",
					"action": "Get files from agreements",
					"description": "PDFs linked to this agreement. Note: This property is in the process of being deprecated. Use the  file property instead.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}/files"
						}
					}
				},
				{
					"name": "Agreements Create Files",
					"value": "Agreements Create Files",
					"action": "Create agreementFileLocalization",
					"description": "Create a new localized agreement file.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}/files"
						}
					}
				},
				{
					"name": "Agreements Delete Files",
					"value": "Agreements Delete Files",
					"action": "Delete navigation property files for agreements",
					"description": "Delete navigation property files for agreements",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}/files/{{$parameter[\"agreementFileLocalization-id\"]}}"
						}
					}
				},
				{
					"name": "Agreements Get Files",
					"value": "Agreements Get Files",
					"action": "Get files from agreements",
					"description": "PDFs linked to this agreement. Note: This property is in the process of being deprecated. Use the  file property instead.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}/files/{{$parameter[\"agreementFileLocalization-id\"]}}"
						}
					}
				},
				{
					"name": "Agreements Update Files",
					"value": "Agreements Update Files",
					"action": "Update the navigation property files in agreements",
					"description": "Update the navigation property files in agreements",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}/files/{{$parameter[\"agreementFileLocalization-id\"]}}"
						}
					}
				},
				{
					"name": "Agreements Files List Versions",
					"value": "Agreements Files List Versions",
					"action": "Get versions from agreements",
					"description": "Read-only. Customized versions of the terms of use agreement in the Azure AD tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}/files/{{$parameter[\"agreementFileLocalization-id\"]}}/versions"
						}
					}
				},
				{
					"name": "Agreements Files Create Versions",
					"value": "Agreements Files Create Versions",
					"action": "Create new navigation property to versions for agreements",
					"description": "Create new navigation property to versions for agreements",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}/files/{{$parameter[\"agreementFileLocalization-id\"]}}/versions"
						}
					}
				},
				{
					"name": "Agreements Files Delete Versions",
					"value": "Agreements Files Delete Versions",
					"action": "Delete navigation property versions for agreements",
					"description": "Delete navigation property versions for agreements",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}/files/{{$parameter[\"agreementFileLocalization-id\"]}}/versions/{{$parameter[\"agreementFileVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Agreements Files Get Versions",
					"value": "Agreements Files Get Versions",
					"action": "Get versions from agreements",
					"description": "Read-only. Customized versions of the terms of use agreement in the Azure AD tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}/files/{{$parameter[\"agreementFileLocalization-id\"]}}/versions/{{$parameter[\"agreementFileVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Agreements Files Update Versions",
					"value": "Agreements Files Update Versions",
					"action": "Update the navigation property versions in agreements",
					"description": "Update the navigation property versions in agreements",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}/files/{{$parameter[\"agreementFileLocalization-id\"]}}/versions/{{$parameter[\"agreementFileVersion-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /agreements/{agreement-id}/files",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements List Files"
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
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements List Files"
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
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements List Files"
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
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements List Files"
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
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements List Files"
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
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements List Files"
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
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements List Files"
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
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements List Files"
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
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements List Files"
					]
				}
			}
		},
		{
			"displayName": "POST /agreements/{agreement-id}/files",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements Create Files"
					]
				}
			}
		},
		{
			"displayName": "POST /agreements/{agreement-id}/files<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements Create Files"
					]
				}
			}
		},
		{
			"displayName": "DELETE /agreements/{agreement-id}/files/{agreementFileLocalization-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements Delete Files"
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
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements Delete Files"
					]
				}
			}
		},
		{
			"displayName": "GET /agreements/{agreement-id}/files/{agreementFileLocalization-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements Get Files"
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
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements Get Files"
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
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements Get Files"
					]
				}
			}
		},
		{
			"displayName": "PATCH /agreements/{agreement-id}/files/{agreementFileLocalization-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements Update Files"
					]
				}
			}
		},
		{
			"displayName": "PATCH /agreements/{agreement-id}/files/{agreementFileLocalization-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements Update Files"
					]
				}
			}
		},
		{
			"displayName": "GET /agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements Files List Versions"
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
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements Files List Versions"
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
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements Files List Versions"
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
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements Files List Versions"
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
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements Files List Versions"
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
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements Files List Versions"
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
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements Files List Versions"
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
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements Files List Versions"
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
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements Files List Versions"
					]
				}
			}
		},
		{
			"displayName": "POST /agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements Files Create Versions"
					]
				}
			}
		},
		{
			"displayName": "POST /agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements Files Create Versions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements Files Delete Versions"
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
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements Files Delete Versions"
					]
				}
			}
		},
		{
			"displayName": "GET /agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements Files Get Versions"
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
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements Files Get Versions"
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
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements Files Get Versions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements Files Update Versions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /agreements/{agreement-id}/files/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File Localization"
					],
					"operation": [
						"Agreements Files Update Versions"
					]
				}
			}
		},
];
