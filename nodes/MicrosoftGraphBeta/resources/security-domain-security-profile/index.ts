import type { INodeProperties } from 'n8n-workflow';

export const securityDomainSecurityProfileDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Security Domain Security Profile"
					]
				}
			},
			"options": [
				{
					"name": "Security List Domain Security Profiles",
					"value": "Security List Domain Security Profiles",
					"action": "Get domainSecurityProfiles from security",
					"description": "Get domainSecurityProfiles from security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/domainSecurityProfiles"
						}
					}
				},
				{
					"name": "Security Create Domain Security Profiles",
					"value": "Security Create Domain Security Profiles",
					"action": "Create new navigation property to domainSecurityProfiles for security",
					"description": "Create new navigation property to domainSecurityProfiles for security",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/domainSecurityProfiles"
						}
					}
				},
				{
					"name": "Security Delete Domain Security Profiles",
					"value": "Security Delete Domain Security Profiles",
					"action": "Delete navigation property domainSecurityProfiles for security",
					"description": "Delete navigation property domainSecurityProfiles for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/domainSecurityProfiles/{{$parameter[\"domainSecurityProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Security Get Domain Security Profiles",
					"value": "Security Get Domain Security Profiles",
					"action": "Get domainSecurityProfiles from security",
					"description": "Get domainSecurityProfiles from security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/domainSecurityProfiles/{{$parameter[\"domainSecurityProfile-id\"]}}"
						}
					}
				},
				{
					"name": "Security Update Domain Security Profiles",
					"value": "Security Update Domain Security Profiles",
					"action": "Update the navigation property domainSecurityProfiles in security",
					"description": "Update the navigation property domainSecurityProfiles in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/domainSecurityProfiles/{{$parameter[\"domainSecurityProfile-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /security/domainSecurityProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Domain Security Profile"
					],
					"operation": [
						"Security List Domain Security Profiles"
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
						"Security Domain Security Profile"
					],
					"operation": [
						"Security List Domain Security Profiles"
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
						"Security Domain Security Profile"
					],
					"operation": [
						"Security List Domain Security Profiles"
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
						"Security Domain Security Profile"
					],
					"operation": [
						"Security List Domain Security Profiles"
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
						"Security Domain Security Profile"
					],
					"operation": [
						"Security List Domain Security Profiles"
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
						"Security Domain Security Profile"
					],
					"operation": [
						"Security List Domain Security Profiles"
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
						"Security Domain Security Profile"
					],
					"operation": [
						"Security List Domain Security Profiles"
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
						"Security Domain Security Profile"
					],
					"operation": [
						"Security List Domain Security Profiles"
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
						"Security Domain Security Profile"
					],
					"operation": [
						"Security List Domain Security Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /security/domainSecurityProfiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Domain Security Profile"
					],
					"operation": [
						"Security Create Domain Security Profiles"
					]
				}
			}
		},
		{
			"displayName": "POST /security/domainSecurityProfiles<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Domain Security Profile"
					],
					"operation": [
						"Security Create Domain Security Profiles"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/domainSecurityProfiles/{domainSecurityProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Domain Security Profile"
					],
					"operation": [
						"Security Delete Domain Security Profiles"
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
						"Security Domain Security Profile"
					],
					"operation": [
						"Security Delete Domain Security Profiles"
					]
				}
			}
		},
		{
			"displayName": "GET /security/domainSecurityProfiles/{domainSecurityProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Domain Security Profile"
					],
					"operation": [
						"Security Get Domain Security Profiles"
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
						"Security Domain Security Profile"
					],
					"operation": [
						"Security Get Domain Security Profiles"
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
						"Security Domain Security Profile"
					],
					"operation": [
						"Security Get Domain Security Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/domainSecurityProfiles/{domainSecurityProfile-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Domain Security Profile"
					],
					"operation": [
						"Security Update Domain Security Profiles"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/domainSecurityProfiles/{domainSecurityProfile-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Domain Security Profile"
					],
					"operation": [
						"Security Update Domain Security Profiles"
					]
				}
			}
		},
];
