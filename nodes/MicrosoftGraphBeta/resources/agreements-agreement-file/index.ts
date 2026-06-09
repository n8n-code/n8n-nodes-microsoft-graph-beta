import type { INodeProperties } from 'n8n-workflow';

export const agreementsAgreementFileDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File"
					]
				}
			},
			"options": [
				{
					"name": "Agreements Delete File",
					"value": "Agreements Delete File",
					"action": "Delete navigation property file for agreements",
					"description": "Delete navigation property file for agreements",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}/file"
						}
					}
				},
				{
					"name": "Agreements Get File",
					"value": "Agreements Get File",
					"action": "Get agreementFile",
					"description": "Retrieve the details of the default file for an agreement, including the language and version information. The file information is specified through the agreementFile object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}/file"
						}
					}
				},
				{
					"name": "Agreements Update File",
					"value": "Agreements Update File",
					"action": "Update the navigation property file in agreements",
					"description": "Update the navigation property file in agreements",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}/file"
						}
					}
				},
				{
					"name": "Agreements File List Localizations",
					"value": "Agreements File List Localizations",
					"action": "Get localizations from agreements",
					"description": "The localized version of the terms of use agreement files attached to the agreement.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}/file/localizations"
						}
					}
				},
				{
					"name": "Agreements File Create Localizations",
					"value": "Agreements File Create Localizations",
					"action": "Create new navigation property to localizations for agreements",
					"description": "Create new navigation property to localizations for agreements",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}/file/localizations"
						}
					}
				},
				{
					"name": "Agreements File Delete Localizations",
					"value": "Agreements File Delete Localizations",
					"action": "Delete navigation property localizations for agreements",
					"description": "Delete navigation property localizations for agreements",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}/file/localizations/{{$parameter[\"agreementFileLocalization-id\"]}}"
						}
					}
				},
				{
					"name": "Agreements File Get Localizations",
					"value": "Agreements File Get Localizations",
					"action": "Get localizations from agreements",
					"description": "The localized version of the terms of use agreement files attached to the agreement.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}/file/localizations/{{$parameter[\"agreementFileLocalization-id\"]}}"
						}
					}
				},
				{
					"name": "Agreements File Update Localizations",
					"value": "Agreements File Update Localizations",
					"action": "Update the navigation property localizations in agreements",
					"description": "Update the navigation property localizations in agreements",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}/file/localizations/{{$parameter[\"agreementFileLocalization-id\"]}}"
						}
					}
				},
				{
					"name": "Agreements File Localizations List Versions",
					"value": "Agreements File Localizations List Versions",
					"action": "Get versions from agreements",
					"description": "Read-only. Customized versions of the terms of use agreement in the Azure AD tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}/file/localizations/{{$parameter[\"agreementFileLocalization-id\"]}}/versions"
						}
					}
				},
				{
					"name": "Agreements File Localizations Create Versions",
					"value": "Agreements File Localizations Create Versions",
					"action": "Create new navigation property to versions for agreements",
					"description": "Create new navigation property to versions for agreements",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}/file/localizations/{{$parameter[\"agreementFileLocalization-id\"]}}/versions"
						}
					}
				},
				{
					"name": "Agreements File Localizations Delete Versions",
					"value": "Agreements File Localizations Delete Versions",
					"action": "Delete navigation property versions for agreements",
					"description": "Delete navigation property versions for agreements",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}/file/localizations/{{$parameter[\"agreementFileLocalization-id\"]}}/versions/{{$parameter[\"agreementFileVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Agreements File Localizations Get Versions",
					"value": "Agreements File Localizations Get Versions",
					"action": "Get versions from agreements",
					"description": "Read-only. Customized versions of the terms of use agreement in the Azure AD tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}/file/localizations/{{$parameter[\"agreementFileLocalization-id\"]}}/versions/{{$parameter[\"agreementFileVersion-id\"]}}"
						}
					}
				},
				{
					"name": "Agreements File Localizations Update Versions",
					"value": "Agreements File Localizations Update Versions",
					"action": "Update the navigation property versions in agreements",
					"description": "Update the navigation property versions in agreements",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/agreements/{{$parameter[\"agreement-id\"]}}/file/localizations/{{$parameter[\"agreementFileLocalization-id\"]}}/versions/{{$parameter[\"agreementFileVersion-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /agreements/{agreement-id}/file",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements Delete File"
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
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements Delete File"
					]
				}
			}
		},
		{
			"displayName": "GET /agreements/{agreement-id}/file",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements Get File"
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
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements Get File"
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
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements Get File"
					]
				}
			}
		},
		{
			"displayName": "PATCH /agreements/{agreement-id}/file",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements Update File"
					]
				}
			}
		},
		{
			"displayName": "PATCH /agreements/{agreement-id}/file<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements Update File"
					]
				}
			}
		},
		{
			"displayName": "GET /agreements/{agreement-id}/file/localizations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File List Localizations"
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
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File List Localizations"
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
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File List Localizations"
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
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File List Localizations"
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
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File List Localizations"
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
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File List Localizations"
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
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File List Localizations"
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
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File List Localizations"
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
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File List Localizations"
					]
				}
			}
		},
		{
			"displayName": "POST /agreements/{agreement-id}/file/localizations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File Create Localizations"
					]
				}
			}
		},
		{
			"displayName": "POST /agreements/{agreement-id}/file/localizations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File Create Localizations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File Delete Localizations"
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
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File Delete Localizations"
					]
				}
			}
		},
		{
			"displayName": "GET /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File Get Localizations"
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
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File Get Localizations"
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
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File Get Localizations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File Update Localizations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File Update Localizations"
					]
				}
			}
		},
		{
			"displayName": "GET /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File Localizations List Versions"
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
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File Localizations List Versions"
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
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File Localizations List Versions"
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
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File Localizations List Versions"
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
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File Localizations List Versions"
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
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File Localizations List Versions"
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
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File Localizations List Versions"
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
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File Localizations List Versions"
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
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File Localizations List Versions"
					]
				}
			}
		},
		{
			"displayName": "POST /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File Localizations Create Versions"
					]
				}
			}
		},
		{
			"displayName": "POST /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File Localizations Create Versions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File Localizations Delete Versions"
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
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File Localizations Delete Versions"
					]
				}
			}
		},
		{
			"displayName": "GET /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File Localizations Get Versions"
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
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File Localizations Get Versions"
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
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File Localizations Get Versions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File Localizations Update Versions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /agreements/{agreement-id}/file/localizations/{agreementFileLocalization-id}/versions/{agreementFileVersion-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Agreements Agreement File"
					],
					"operation": [
						"Agreements File Localizations Update Versions"
					]
				}
			}
		},
];
