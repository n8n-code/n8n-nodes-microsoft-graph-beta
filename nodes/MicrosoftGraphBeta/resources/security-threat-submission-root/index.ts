import type { INodeProperties } from 'n8n-workflow';

export const securityThreatSubmissionRootDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					]
				}
			},
			"options": [
				{
					"name": "Security Delete Threat Submission",
					"value": "Security Delete Threat Submission",
					"action": "Delete navigation property threatSubmission for security",
					"description": "Delete navigation property threatSubmission for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/threatSubmission"
						}
					}
				},
				{
					"name": "Security Get Threat Submission",
					"value": "Security Get Threat Submission",
					"action": "Get threatSubmission from security",
					"description": "A threat submission sent to Microsoft; for example, a suspicious email threat, URL threat, or file threat.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/threatSubmission"
						}
					}
				},
				{
					"name": "Security Update Threat Submission",
					"value": "Security Update Threat Submission",
					"action": "Update the navigation property threatSubmission in security",
					"description": "Update the navigation property threatSubmission in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/threatSubmission"
						}
					}
				},
				{
					"name": "Security Threat Submission List Email Threat Submission Policies",
					"value": "Security Threat Submission List Email Threat Submission Policies",
					"action": "List emailThreatSubmissionPolicies",
					"description": "Get a list of the emailThreatSubmissionPolicy objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/threatSubmission/emailThreatSubmissionPolicies"
						}
					}
				},
				{
					"name": "Security Threat Submission Create Email Threat Submission Policies",
					"value": "Security Threat Submission Create Email Threat Submission Policies",
					"action": "Create new navigation property to emailThreatSubmissionPolicies for security",
					"description": "Create new navigation property to emailThreatSubmissionPolicies for security",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/threatSubmission/emailThreatSubmissionPolicies"
						}
					}
				},
				{
					"name": "Security Threat Submission Delete Email Threat Submission Policies",
					"value": "Security Threat Submission Delete Email Threat Submission Policies",
					"action": "Delete navigation property emailThreatSubmissionPolicies for security",
					"description": "Delete navigation property emailThreatSubmissionPolicies for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/threatSubmission/emailThreatSubmissionPolicies/{{$parameter[\"emailThreatSubmissionPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Security Threat Submission Get Email Threat Submission Policies",
					"value": "Security Threat Submission Get Email Threat Submission Policies",
					"action": "Get emailThreatSubmissionPolicies from security",
					"description": "Get emailThreatSubmissionPolicies from security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/threatSubmission/emailThreatSubmissionPolicies/{{$parameter[\"emailThreatSubmissionPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Security Threat Submission Update Email Threat Submission Policies",
					"value": "Security Threat Submission Update Email Threat Submission Policies",
					"action": "Update the navigation property emailThreatSubmissionPolicies in security",
					"description": "Update the navigation property emailThreatSubmissionPolicies in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/threatSubmission/emailThreatSubmissionPolicies/{{$parameter[\"emailThreatSubmissionPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Security Threat Submission List Email Threats",
					"value": "Security Threat Submission List Email Threats",
					"action": "List emailThreatSubmissions",
					"description": "Get a list of the emailThreatSubmission objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/threatSubmission/emailThreats"
						}
					}
				},
				{
					"name": "Security Threat Submission Create Email Threats",
					"value": "Security Threat Submission Create Email Threats",
					"action": "Create emailThreatSubmission",
					"description": "Create a new emailThreatSubmission object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/threatSubmission/emailThreats"
						}
					}
				},
				{
					"name": "Security Threat Submission Delete Email Threats",
					"value": "Security Threat Submission Delete Email Threats",
					"action": "Delete navigation property emailThreats for security",
					"description": "Delete navigation property emailThreats for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/threatSubmission/emailThreats/{{$parameter[\"emailThreatSubmission-id\"]}}"
						}
					}
				},
				{
					"name": "Security Threat Submission Get Email Threats",
					"value": "Security Threat Submission Get Email Threats",
					"action": "Get emailThreats from security",
					"description": "Get emailThreats from security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/threatSubmission/emailThreats/{{$parameter[\"emailThreatSubmission-id\"]}}"
						}
					}
				},
				{
					"name": "Security Threat Submission Update Email Threats",
					"value": "Security Threat Submission Update Email Threats",
					"action": "Update the navigation property emailThreats in security",
					"description": "Update the navigation property emailThreats in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/threatSubmission/emailThreats/{{$parameter[\"emailThreatSubmission-id\"]}}"
						}
					}
				},
				{
					"name": "Security Threat Submission List File Threats",
					"value": "Security Threat Submission List File Threats",
					"action": "List fileThreatSubmissions",
					"description": "Get a list of the fileThreatSubmission objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/threatSubmission/fileThreats"
						}
					}
				},
				{
					"name": "Security Threat Submission Create File Threats",
					"value": "Security Threat Submission Create File Threats",
					"action": "Create new navigation property to fileThreats for security",
					"description": "Create new navigation property to fileThreats for security",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/threatSubmission/fileThreats"
						}
					}
				},
				{
					"name": "Security Threat Submission Delete File Threats",
					"value": "Security Threat Submission Delete File Threats",
					"action": "Delete navigation property fileThreats for security",
					"description": "Delete navigation property fileThreats for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/threatSubmission/fileThreats/{{$parameter[\"fileThreatSubmission-id\"]}}"
						}
					}
				},
				{
					"name": "Security Threat Submission Get File Threats",
					"value": "Security Threat Submission Get File Threats",
					"action": "Get fileThreats from security",
					"description": "Get fileThreats from security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/threatSubmission/fileThreats/{{$parameter[\"fileThreatSubmission-id\"]}}"
						}
					}
				},
				{
					"name": "Security Threat Submission Update File Threats",
					"value": "Security Threat Submission Update File Threats",
					"action": "Update the navigation property fileThreats in security",
					"description": "Update the navigation property fileThreats in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/threatSubmission/fileThreats/{{$parameter[\"fileThreatSubmission-id\"]}}"
						}
					}
				},
				{
					"name": "Security Threat Submission List Url Threats",
					"value": "Security Threat Submission List Url Threats",
					"action": "List urlThreatSubmissions",
					"description": "Get a list of the urlThreatSubmission objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/threatSubmission/urlThreats"
						}
					}
				},
				{
					"name": "Security Threat Submission Create Url Threats",
					"value": "Security Threat Submission Create Url Threats",
					"action": "Create urlThreatSubmission",
					"description": "Create a new urlThreatSubmission object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/threatSubmission/urlThreats"
						}
					}
				},
				{
					"name": "Security Threat Submission Delete Url Threats",
					"value": "Security Threat Submission Delete Url Threats",
					"action": "Delete navigation property urlThreats for security",
					"description": "Delete navigation property urlThreats for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/threatSubmission/urlThreats/{{$parameter[\"urlThreatSubmission-id\"]}}"
						}
					}
				},
				{
					"name": "Security Threat Submission Get Url Threats",
					"value": "Security Threat Submission Get Url Threats",
					"action": "Get urlThreats from security",
					"description": "Get urlThreats from security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/threatSubmission/urlThreats/{{$parameter[\"urlThreatSubmission-id\"]}}"
						}
					}
				},
				{
					"name": "Security Threat Submission Update Url Threats",
					"value": "Security Threat Submission Update Url Threats",
					"action": "Update the navigation property urlThreats in security",
					"description": "Update the navigation property urlThreats in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/threatSubmission/urlThreats/{{$parameter[\"urlThreatSubmission-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /security/threatSubmission",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Delete Threat Submission"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Delete Threat Submission"
					]
				}
			}
		},
		{
			"displayName": "GET /security/threatSubmission",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Get Threat Submission"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Get Threat Submission"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Get Threat Submission"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/threatSubmission",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Update Threat Submission"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/threatSubmission<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Update Threat Submission"
					]
				}
			}
		},
		{
			"displayName": "GET /security/threatSubmission/emailThreatSubmissionPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List Email Threat Submission Policies"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List Email Threat Submission Policies"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List Email Threat Submission Policies"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List Email Threat Submission Policies"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List Email Threat Submission Policies"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List Email Threat Submission Policies"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List Email Threat Submission Policies"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List Email Threat Submission Policies"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List Email Threat Submission Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /security/threatSubmission/emailThreatSubmissionPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Create Email Threat Submission Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /security/threatSubmission/emailThreatSubmissionPolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Create Email Threat Submission Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Delete Email Threat Submission Policies"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Delete Email Threat Submission Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Get Email Threat Submission Policies"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Get Email Threat Submission Policies"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Get Email Threat Submission Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Update Email Threat Submission Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/threatSubmission/emailThreatSubmissionPolicies/{emailThreatSubmissionPolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Update Email Threat Submission Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /security/threatSubmission/emailThreats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List Email Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List Email Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List Email Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List Email Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List Email Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List Email Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List Email Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List Email Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List Email Threats"
					]
				}
			}
		},
		{
			"displayName": "POST /security/threatSubmission/emailThreats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Create Email Threats"
					]
				}
			}
		},
		{
			"displayName": "POST /security/threatSubmission/emailThreats<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Create Email Threats"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/threatSubmission/emailThreats/{emailThreatSubmission-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Delete Email Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Delete Email Threats"
					]
				}
			}
		},
		{
			"displayName": "GET /security/threatSubmission/emailThreats/{emailThreatSubmission-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Get Email Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Get Email Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Get Email Threats"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/threatSubmission/emailThreats/{emailThreatSubmission-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Update Email Threats"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/threatSubmission/emailThreats/{emailThreatSubmission-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Update Email Threats"
					]
				}
			}
		},
		{
			"displayName": "GET /security/threatSubmission/fileThreats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List File Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List File Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List File Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List File Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List File Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List File Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List File Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List File Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List File Threats"
					]
				}
			}
		},
		{
			"displayName": "POST /security/threatSubmission/fileThreats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Create File Threats"
					]
				}
			}
		},
		{
			"displayName": "POST /security/threatSubmission/fileThreats<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Create File Threats"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/threatSubmission/fileThreats/{fileThreatSubmission-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Delete File Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Delete File Threats"
					]
				}
			}
		},
		{
			"displayName": "GET /security/threatSubmission/fileThreats/{fileThreatSubmission-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Get File Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Get File Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Get File Threats"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/threatSubmission/fileThreats/{fileThreatSubmission-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Update File Threats"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/threatSubmission/fileThreats/{fileThreatSubmission-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Update File Threats"
					]
				}
			}
		},
		{
			"displayName": "GET /security/threatSubmission/urlThreats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List Url Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List Url Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List Url Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List Url Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List Url Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List Url Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List Url Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List Url Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission List Url Threats"
					]
				}
			}
		},
		{
			"displayName": "POST /security/threatSubmission/urlThreats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Create Url Threats"
					]
				}
			}
		},
		{
			"displayName": "POST /security/threatSubmission/urlThreats<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Create Url Threats"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/threatSubmission/urlThreats/{urlThreatSubmission-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Delete Url Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Delete Url Threats"
					]
				}
			}
		},
		{
			"displayName": "GET /security/threatSubmission/urlThreats/{urlThreatSubmission-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Get Url Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Get Url Threats"
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
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Get Url Threats"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/threatSubmission/urlThreats/{urlThreatSubmission-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Update Url Threats"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/threatSubmission/urlThreats/{urlThreatSubmission-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Threat Submission Root"
					],
					"operation": [
						"Security Threat Submission Update Url Threats"
					]
				}
			}
		},
];
