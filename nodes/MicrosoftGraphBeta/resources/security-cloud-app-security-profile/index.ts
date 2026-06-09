import type { INodeProperties } from 'n8n-workflow';

export const securityCloudAppSecurityProfileDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cloud App Security Profile"
					]
				}
			},
			"options": [
				{
					"name": "Security List Cloud App Security Profiles",
					"value": "Security List Cloud App Security Profiles",
					"action": "Get cloudAppSecurityProfiles from security",
					"description": "Get cloudAppSecurityProfiles from security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cloudAppSecurityProfiles"
						}
					}
				},
				{
					"name": "Security Create Cloud App Security Profiles",
					"value": "Security Create Cloud App Security Profiles",
					"action": "Create new navigation property to cloudAppSecurityProfiles for security",
					"description": "Create new navigation property to cloudAppSecurityProfiles for security",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/cloudAppSecurityProfiles"
						}
					}
				},
				{
					"name": "Security Delete Cloud App Security Profiles",
					"value": "Security Delete Cloud App Security Profiles",
					"action": "Delete navigation property cloudAppSecurityProfiles for security",
					"description": "Delete navigation property cloudAppSecurityProfiles for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/cloudAppSecurityProfiles/{{$parameter[\"cloudAppSecurityProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Security Get Cloud App Security Profiles",
					"value": "Security Get Cloud App Security Profiles",
					"action": "Get cloudAppSecurityProfiles from security",
					"description": "Get cloudAppSecurityProfiles from security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/cloudAppSecurityProfiles/{{$parameter[\"cloudAppSecurityProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Security Update Cloud App Security Profiles",
					"value": "Security Update Cloud App Security Profiles",
					"action": "Update the navigation property cloudAppSecurityProfiles in security",
					"description": "Update the navigation property cloudAppSecurityProfiles in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/cloudAppSecurityProfiles/{{$parameter[\"cloudAppSecurityProfile-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /security/cloudAppSecurityProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cloud App Security Profile"
					],
					"operation": [
						"Security List Cloud App Security Profiles"
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
						"Security Cloud App Security Profile"
					],
					"operation": [
						"Security List Cloud App Security Profiles"
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
						"Security Cloud App Security Profile"
					],
					"operation": [
						"Security List Cloud App Security Profiles"
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
						"Security Cloud App Security Profile"
					],
					"operation": [
						"Security List Cloud App Security Profiles"
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
						"Security Cloud App Security Profile"
					],
					"operation": [
						"Security List Cloud App Security Profiles"
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
						"Security Cloud App Security Profile"
					],
					"operation": [
						"Security List Cloud App Security Profiles"
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
						"Security Cloud App Security Profile"
					],
					"operation": [
						"Security List Cloud App Security Profiles"
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
						"Security Cloud App Security Profile"
					],
					"operation": [
						"Security List Cloud App Security Profiles"
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
						"Security Cloud App Security Profile"
					],
					"operation": [
						"Security List Cloud App Security Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cloudAppSecurityProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cloud App Security Profile"
					],
					"operation": [
						"Security Create Cloud App Security Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /security/cloudAppSecurityProfiles<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cloud App Security Profile"
					],
					"operation": [
						"Security Create Cloud App Security Profiles"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cloud App Security Profile"
					],
					"operation": [
						"Security Delete Cloud App Security Profiles"
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
						"Security Cloud App Security Profile"
					],
					"operation": [
						"Security Delete Cloud App Security Profiles"
					]
				}
			}
		},
		{
			"displayName": "GET /security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cloud App Security Profile"
					],
					"operation": [
						"Security Get Cloud App Security Profiles"
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
						"Security Cloud App Security Profile"
					],
					"operation": [
						"Security Get Cloud App Security Profiles"
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
						"Security Cloud App Security Profile"
					],
					"operation": [
						"Security Get Cloud App Security Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cloud App Security Profile"
					],
					"operation": [
						"Security Update Cloud App Security Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/cloudAppSecurityProfiles/{cloudAppSecurityProfile-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Cloud App Security Profile"
					],
					"operation": [
						"Security Update Cloud App Security Profiles"
					]
				}
			}
		},
];
